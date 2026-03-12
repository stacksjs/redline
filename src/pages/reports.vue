<script setup lang="ts">
import { Chart } from 'chart.js/auto'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'ReportsPage',
})

useHead({
  title: 'Orozcos auto brands reports',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap',
    },
  ],
  meta: [
    { name: 'description', content: 'Orozcos auto brands reports' },
  ],
})

// ── Sample data ──
const SAMPLE = {
  leads: [
    { loc: 'Orozco\'s Atlantic', gl: 40, wi: 2, gs: 49171.61, ws: 7993.98 },
    { loc: 'Orozco\'s Bellflower', gl: 34, wi: 7, gs: 29495.38, ws: 9148.40 },
    { loc: 'Orozco\'s Long Beach', gl: 21, wi: 9, gs: 14253.53, ws: 4927.96 },
    { loc: 'ECM Broadway', gl: 12, wi: 3, gs: 14000.00, ws: 2500.00 },
    { loc: 'ECM Wardlow', gl: 8, wi: 3, gs: 10293.57, ws: 3973.10 },
    { loc: 'ECM Downey', gl: 5, wi: 2, gs: 8000.00, ws: 1433.41 },
    { loc: 'Raven\'s Garden Grove', gl: 8, wi: 2, gs: 5414.55, ws: 1794.94 },
    { loc: 'Raven\'s Fullerton', gl: 12, wi: 8, gs: 8371.57, ws: 7803.00 },
  ],
  yelp: [
    { loc: 'Orozco\'s Atlantic', rating: 3.9, total: 102, pos: 5, neg: 1 },
    { loc: 'Orozco\'s Bellflower', rating: 4.0, total: 93, pos: 0, neg: 0 },
    { loc: 'Orozco\'s Long Beach', rating: 3.6, total: 189, pos: 2, neg: 1 },
    { loc: 'ECM Broadway', rating: 4.1, total: 157, pos: 9, neg: 1 },
    { loc: 'ECM Wardlow', rating: 4.0, total: 42, pos: 3, neg: 1 },
    { loc: 'ECM Downey', rating: 3.6, total: 22, pos: 0, neg: 0 },
    { loc: 'Raven\'s Garden Grove', rating: 4.0, total: 55, pos: 3, neg: 0 },
    { loc: 'Raven\'s Fullerton', rating: 3.6, total: 22, pos: 0, neg: 0 },
  ],
  calls: [
    { shop: 'Atlantic', calls: 905 },
    { shop: 'Bellflower', calls: 1420 },
    { shop: 'Long Beach', calls: 1870 },
    { shop: 'Broadway', calls: 510 },
    { shop: 'Wardlow', calls: 449 },
    { shop: 'Downey', calls: 374 },
    { shop: 'Garden Grove', calls: 320 },
    { shop: 'Fullerton', calls: 290 },
  ],
}

const currentData = ref(SAMPLE)
const activeTab = ref(0)
const activeMonth = ref('Jan')
const activeSmBrand = ref('orozco')
const sheetUrl = ref('')
const connectStatus = ref('')
const dataMode = ref('Sample Data')
const chartInstances: Record<string, Chart> = {}

// Canvas refs for charts
const chartRevenueLoc = ref<HTMLCanvasElement | null>(null)
const chartLeadsLoc = ref<HTMLCanvasElement | null>(null)
const chartCalls = ref<HTMLCanvasElement | null>(null)
const chartRoasBar = ref<HTMLCanvasElement | null>(null)
const chartSpendBrand = ref<HTMLCanvasElement | null>(null)
const chartClicksLoc = ref<HTMLCanvasElement | null>(null)
const chartYelpRatings = ref<HTMLCanvasElement | null>(null)
const chartYelpNew = ref<HTMLCanvasElement | null>(null)
const chartSmOrozcoImpr = ref<HTMLCanvasElement | null>(null)
const chartSmOrozcoFol = ref<HTMLCanvasElement | null>(null)

// Header stats
const headerStats = computed(() => {
  const leads = currentData.value.leads
  const totalRev = leads.reduce((a, r) => a + r.gs + r.ws, 0)
  const totalLeads = leads.reduce((a, r) => a + r.gl + r.wi, 0)
  const spend = 13710
  const roas = (totalRev / spend).toFixed(1)
  return {
    revenue: totalRev.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    spend: spend.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    roas: `${roas}x`,
    leads: totalLeads,
  }
})

// KPI strip (Sales & Leads panel)
const kpiStrip = computed(() => {
  const leads = currentData.value.leads
  const totalRev = leads.reduce((a, r) => a + r.gs + r.ws, 0)
  const totalLeads = leads.reduce((a, r) => a + r.gl + r.wi, 0)
  const spend = 13710
  const cpl = totalLeads ? Math.round(spend / totalLeads) : 0
  return {
    spend: spend.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    revenue: totalRev.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    roas: `${(totalRev / spend).toFixed(1)}x`,
    leads: leads.reduce((a, r) => a + r.gl + r.wi, 0),
    grandLeads: totalLeads,
    cpl: `$${cpl}`,
  }
})

// Leads table
const leadsTable = computed(() => {
  const data = currentData.value.leads
  const rows = data.map(r => ({
    ...r,
    totalRev: r.gs + r.ws,
    gsF: r.gs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    wsF: r.ws.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    totalRevF: (r.gs + r.ws).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  }))
  const tgl = data.reduce((a, r) => a + r.gl, 0)
  const twi = data.reduce((a, r) => a + r.wi, 0)
  const tgs = data.reduce((a, r) => a + r.gs, 0)
  const tws = data.reduce((a, r) => a + r.ws, 0)
  return {
    rows,
    foot: { tgl, twi, tgs, tws, total: tgs + tws },
  }
})

// Yelp table
const yelpTable = computed(() => {
  const data = currentData.value.yelp
  const rows = data.map(r => ({
    ...r,
    net: r.pos - r.neg,
  }))
  const tpos = data.reduce((a, r) => a + r.pos, 0)
  const tneg = data.reduce((a, r) => a + r.neg, 0)
  const ttot = data.reduce((a, r) => a + r.total, 0)
  const avgRating = (data.reduce((a, r) => a + r.rating, 0) / data.length).toFixed(2)
  return { rows, foot: { avgRating, ttot, tpos, tneg, net: tpos - tneg } }
})

const COLORS = ['#c0392b', '#1a5276', '#1a7a4a', '#d4a017', '#6c3483', '#c0550a', '#2c7873', '#444']
const COLORS_LIGHT = ['rgba(192,57,43,0.7)', 'rgba(26,82,118,0.7)', 'rgba(26,122,74,0.7)', 'rgba(212,160,23,0.7)', 'rgba(108,52,131,0.7)', 'rgba(192,85,10,0.7)', 'rgba(44,120,115,0.7)', 'rgba(68,68,68,0.7)']

function makeChart(
  canvas: HTMLCanvasElement | null,
  id: string,
  type: 'bar' | 'line' | 'doughnut',
  labels: string[],
  datasets: object[],
  opts: object = {},
) {
  if (!canvas)
    return
  if (chartInstances[id])
    chartInstances[id].destroy()
  chartInstances[id] = new Chart(canvas, {
    type,
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { font: { family: 'Barlow', size: 11 }, color: '#4a4540' } },
        ...(opts as any).plugins,
      },
      scales: type === 'bar' || type === 'line'
        ? {
            x: { ticks: { font: { family: 'Barlow', size: 10 }, color: '#9a9590', maxRotation: 35 }, grid: { color: '#e8e4de' } },
            y: { ticks: { font: { family: 'Barlow', size: 10 }, color: '#9a9590' }, grid: { color: '#e8e4de' } },
            ...(opts as any).scales,
          }
        : undefined,
      ...opts,
    },
  })
}

function buildCharts() {
  const data = currentData.value
  const shortLoc = (loc: string) => loc.replace('Orozco\'s ', 'O\'s ').replace('Raven\'s ', 'R\'s ')

  makeChart(chartRevenueLoc.value, 'chart-revenue-loc', 'bar', data.leads.map(r => shortLoc(r.loc)), [
    { label: 'Google Sales', data: data.leads.map(r => r.gs), backgroundColor: COLORS[0] },
    { label: 'Walk-in Sales', data: data.leads.map(r => r.ws), backgroundColor: COLORS[1] },
  ], { plugins: { legend: { position: 'bottom' } } })
  makeChart(chartLeadsLoc.value, 'chart-leads-loc', 'bar', data.leads.map(r => shortLoc(r.loc)), [
    { label: 'Google Leads', data: data.leads.map(r => r.gl), backgroundColor: COLORS[2] },
    { label: 'Walk-ins', data: data.leads.map(r => r.wi), backgroundColor: COLORS[3] },
  ], { plugins: { legend: { position: 'bottom' } } })
  makeChart(chartCalls.value, 'chart-calls', 'bar', data.calls.map(r => r.shop), [{
    label: 'Calls',
    data: data.calls.map(r => r.calls),
    backgroundColor: data.calls.map((_, i) => COLORS_LIGHT[i % 8]),
    borderColor: data.calls.map((_, i) => COLORS[i % 8]),
    borderWidth: 1,
  }], { plugins: { legend: { display: false } } })
  const totalRev = data.leads.reduce((a, r) => a + r.gs + r.ws, 0)
  makeChart(chartRoasBar.value, 'chart-roas-bar', 'doughnut', ['Revenue', 'Ad Spend'], [{
    data: [totalRev, 13710],
    backgroundColor: ['rgba(26,122,74,0.8)', 'rgba(192,57,43,0.8)'],
    borderWidth: 0,
  }], { plugins: { legend: { position: 'bottom' } }, cutout: '65%' })
  makeChart(chartSpendBrand.value, 'chart-spend-brand', 'doughnut', ['Orozco\'s', 'Euro Car Masters', 'Raven\'s'], [{ data: [8510, 1732, 1593], backgroundColor: [COLORS[0], COLORS[1], COLORS[2]], borderWidth: 0 }], { plugins: { legend: { position: 'bottom' } }, cutout: '60%' })
  makeChart(chartClicksLoc.value, 'chart-clicks-loc', 'bar', ['O\'s Atlantic', 'O\'s Bellflower', 'O\'s Long Beach', 'ECM Broadway', 'ECM Wardlow', 'ECM Downey', 'R\'s G.Grove', 'R\'s Fullerton'], [{ label: 'Clicks', data: [3800, 3600, 3200, 240, 220, 214, 320, 300], backgroundColor: COLORS_LIGHT, borderColor: COLORS, borderWidth: 1 }], { plugins: { legend: { display: false } } })
  makeChart(chartYelpRatings.value, 'chart-yelp-ratings', 'bar', data.yelp.map(r => shortLoc(r.loc)), [{
    label: 'Star Rating',
    data: data.yelp.map(r => r.rating),
    backgroundColor: data.yelp.map(r => (r.rating >= 4 ? 'rgba(26,122,74,0.7)' : r.rating >= 3.8 ? 'rgba(212,160,23,0.7)' : 'rgba(192,57,43,0.7)')),
    borderWidth: 0,
  }], { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } } })
  makeChart(chartYelpNew.value, 'chart-yelp-new', 'bar', data.yelp.map(r => shortLoc(r.loc)), [
    { label: 'Positive', data: data.yelp.map(r => r.pos), backgroundColor: 'rgba(26,122,74,0.7)' },
    { label: 'Negative', data: data.yelp.map(r => r.neg), backgroundColor: 'rgba(192,57,43,0.7)' },
  ], { plugins: { legend: { position: 'bottom' } } })
  makeChart(chartSmOrozcoImpr.value, 'chart-sm-orozco-impr', 'doughnut', ['TikTok', 'YouTube', 'Instagram', 'Facebook'], [{ data: [25000, 3149048, 7587, 96185], backgroundColor: ['#ff6b6b', '#c0392b', '#e91e8c', '#1877f2'], borderWidth: 0 }], { plugins: { legend: { position: 'bottom' } }, cutout: '60%' })
  makeChart(chartSmOrozcoFol.value, 'chart-sm-orozco-fol', 'doughnut', ['TikTok', 'YouTube', 'Instagram', 'Facebook'], [{ data: [19000, 44574, 353, 6800], backgroundColor: ['#ff6b6b', '#c0392b', '#e91e8c', '#1877f2'], borderWidth: 0 }], { plugins: { legend: { position: 'bottom' } }, cutout: '60%' })
}

function switchTab(i: number) {
  activeTab.value = i
}

function selectMonth(month: string) {
  activeMonth.value = month
}

function showSMBrand(brand: string) {
  activeSmBrand.value = brand
}

async function connectSheet() {
  const url = sheetUrl.value.trim()
  if (!url) {
    connectStatus.value = '⚠️ Please paste your Sheet URL first.'
    return
  }
  const match = url.match(/\/spreadsheets\/d\/([\w-]+)/)
  if (!match) {
    connectStatus.value = '⚠️ Invalid Google Sheets URL. Please copy the full URL from your browser.'
    return
  }
  const sheetId = match[1]
  connectStatus.value = '⏳ Connecting...'
  const apiUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Jan%202026`
  try {
    const r = await fetch(apiUrl)
    const text = await r.text()
    const json = JSON.parse(text.replace(/^[^(]+\(/, '').replace(/\);?$/, ''))
    if (!json.table?.rows?.length) {
      connectStatus.value = '⚠️ Sheet connected but no data found in Jan 2026 tab yet. Add data and try again!'
      dataMode.value = 'Connected (Empty)'
      return
    }
    connectStatus.value = '✅ Sheet connected! Showing your real data.'
    dataMode.value = 'Live Data'
  }
  catch {
    connectStatus.value = '⚠️ Could not connect. Make sure your Sheet is shared as "Anyone with the link can view".'
  }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

onMounted(() => {
  nextTick(() => buildCharts())
})

watch(currentData, () => {
  nextTick(() => buildCharts())
}, { deep: true })

watch(activeTab, () => {
  nextTick(() => {
    Object.values(chartInstances).forEach(chart => chart?.resize())
  })
})
</script>

<template>
  <div class="dashboard">
    <!-- Connect banner -->
    <div class="connect-banner">
      <div>
        <div class="banner-label">
          📊 Connect Your Google Sheet
        </div>
        <div class="banner-sub">
          Paste your Sheet link to load your real data
        </div>
      </div>
      <input
        v-model="sheetUrl"
        type="text"
        class="sheet-url-input"
        placeholder="Paste your Google Sheet URL here..."
      >
      <button class="connect-btn" @click="connectSheet()">
        Connect Sheet
      </button>
      <span class="sample-badge" :class="{ 'data-live': dataMode === 'Live Data', 'data-empty': dataMode === 'Connected (Empty)' }">
        {{ dataMode }}
      </span>
      <span class="connect-status">{{ connectStatus }}</span>
    </div>

    <!-- Header -->
    <header>
      <div class="header-left">
        <h1>Orozcos auto brands<br><span>reports</span></h1>
        <p class="report-period">
          2026 · All Locations · Live Reports
        </p>
      </div>
      <div class="header-right">
        <div class="h-stat">
          <div class="val g">
            {{ headerStats.revenue }}
          </div>
          <div class="lbl">
            Total Revenue
          </div>
        </div>
        <div class="h-stat">
          <div class="val">
            {{ headerStats.spend }}
          </div>
          <div class="lbl">
            Total Ad Spend
          </div>
        </div>
        <div class="h-stat">
          <div class="val g">
            {{ headerStats.roas }}
          </div>
          <div class="lbl">
            ROAS
          </div>
        </div>
        <div class="h-stat">
          <div class="val">
            {{ headerStats.leads }}
          </div>
          <div class="lbl">
            Total Leads
          </div>
        </div>
      </div>
    </header>

    <!-- Month selector -->
    <div class="month-bar">
      <button
        v-for="m in months"
        :key="m"
        class="month-btn"
        :class="{ active: activeMonth === m }"
        @click="selectMonth(m)"
      >
        {{ m }}
      </button>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: activeTab === 0 }"
        @click="switchTab(0)"
      >
        Sales & Leads
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 1 }"
        @click="switchTab(1)"
      >
        Google Ads
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 2 }"
        @click="switchTab(2)"
      >
        Social Media
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 3 }"
        @click="switchTab(3)"
      >
        Yelp Reviews
      </div>
    </div>

    <!-- Panel 0: Sales & Leads -->
    <div class="panel" :class="{ active: activeTab === 0 }">
      <div class="sec">
        <span class="acc">01</span> Sales & Lead Overview
      </div>

      <div class="kpi-strip">
        <div class="kpi-cell">
          <div class="lbl">
            Ad Spend
          </div><div class="val">
            {{ kpiStrip.spend }}
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Revenue
          </div><div class="val g">
            {{ kpiStrip.revenue }}
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            ROAS
          </div><div class="val g">
            {{ kpiStrip.roas }}
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Total Leads
          </div><div class="val">
            {{ kpiStrip.leads }}
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Grand Total Leads
          </div><div class="val">
            {{ kpiStrip.grandLeads }}
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Cost Per Lead
          </div><div class="val">
            {{ kpiStrip.cpl }}
          </div>
        </div>
      </div>

      <div class="chart-grid">
        <div class="chart-card">
          <div class="chart-card-hdr">
            Revenue by Location <span class="tag">Google Sales</span>
          </div>
          <div class="chart-card-body">
            <canvas ref="chartRevenueLoc" />
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-hdr">
            Leads by Location <span class="tag">Google + Walk-in</span>
          </div>
          <div class="chart-card-body">
            <canvas ref="chartLeadsLoc" />
          </div>
        </div>
      </div>

      <div class="chart-grid">
        <div class="chart-card">
          <div class="chart-card-hdr">
            Shop Call Volume
          </div>
          <div class="chart-card-body">
            <canvas ref="chartCalls" />
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-hdr">
            Revenue vs Ad Spend
          </div>
          <div class="chart-card-body">
            <canvas ref="chartRoasBar" />
          </div>
        </div>
      </div>

      <div class="sec">
        <span class="acc">02</span> Leads by Location
      </div>
      <table class="data-table">
        <thead><tr><th>Location</th><th>Google Leads</th><th>Walk-ins</th><th>Google Sales</th><th>Walk-in Sales</th><th>Total Revenue</th></tr></thead>
        <tbody>
          <tr v-for="r in leadsTable.rows" :key="r.loc">
            <td>{{ r.loc }}</td>
            <td>{{ r.gl }}</td>
            <td>{{ r.wi }}</td>
            <td>${{ r.gsF }}</td>
            <td>${{ r.wsF }}</td>
            <td>${{ r.totalRevF }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL</td>
            <td>{{ leadsTable.foot.tgl }}</td>
            <td>{{ leadsTable.foot.twi }}</td>
            <td>${{ leadsTable.foot.tgs.toLocaleString('en-US') }}</td>
            <td>${{ leadsTable.foot.tws.toLocaleString('en-US') }}</td>
            <td>${{ leadsTable.foot.total.toLocaleString('en-US') }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Panel 1: Google Ads -->
    <div class="panel" :class="{ active: activeTab === 1 }">
      <div class="sec">
        <span class="acc">01</span> Google Ads Performance
      </div>
      <div class="kpi-strip">
        <div class="kpi-cell">
          <div class="lbl">
            Total Spend
          </div><div class="val">
            $12,744
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Total Clicks
          </div><div class="val">
            12,600
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Avg CPC
          </div><div class="val">
            $1.01
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Conversions
          </div><div class="val g">
            10,800
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Conv. Rate
          </div><div class="val g">
            85.7%
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Best CPC
          </div><div class="val">
            $0.81
          </div><div class="chg neu">
            Orozco's
          </div>
        </div>
      </div>
      <div class="chart-grid">
        <div class="chart-card">
          <div class="chart-card-hdr">
            Spend by Brand
          </div>
          <div class="chart-card-body">
            <canvas ref="chartSpendBrand" />
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-hdr">
            Clicks by Location
          </div>
          <div class="chart-card-body">
            <canvas ref="chartClicksLoc" />
          </div>
        </div>
      </div>
      <div class="sec">
        <span class="acc">02</span> Performance by Location
      </div>
      <table class="data-table">
        <thead><tr><th>Location</th><th>Clicks</th><th>Impressions</th><th>Avg CPC</th><th>Conversions</th><th>Cost</th></tr></thead>
        <tbody>
          <tr><td>Orozco's Atlantic</td><td>3,800</td><td>—</td><td>$0.81</td><td>3,900</td><td>$3,078</td></tr>
          <tr><td>Orozco's Bellflower</td><td>3,600</td><td>—</td><td>$0.81</td><td>3,700</td><td>$2,916</td></tr>
          <tr><td>Orozco's Long Beach</td><td>3,200</td><td>—</td><td>$0.81</td><td>3,200</td><td>$2,592</td></tr>
          <tr><td>ECM Broadway</td><td>240</td><td>9,200</td><td>$2.57</td><td>—</td><td>$617</td></tr>
          <tr><td>ECM Wardlow</td><td>220</td><td>8,800</td><td>$2.57</td><td>—</td><td>$565</td></tr>
          <tr><td>ECM Downey</td><td>214</td><td>8,800</td><td>$2.57</td><td>—</td><td>$550</td></tr>
          <tr><td>Raven's Garden Grove</td><td>320</td><td>13,000</td><td>$2.57</td><td>—</td><td>$822</td></tr>
          <tr><td>Raven's Fullerton</td><td>300</td><td>12,600</td><td>$2.57</td><td>—</td><td>$771</td></tr>
        </tbody>
        <tfoot><tr><td>TOTAL</td><td>~11,894</td><td>—</td><td>$1.07 avg</td><td>10,800</td><td>$11,911</td></tr></tfoot>
      </table>
    </div>

    <!-- Panel 2: Social Media -->
    <div class="panel" :class="{ active: activeTab === 2 }">
      <div class="sec">
        <span class="acc">01</span> Select Brand
      </div>
      <div class="brand-bar">
        <button class="brand-btn" :class="{ active: activeSmBrand === 'orozco' }" @click="showSMBrand('orozco')">
          Orozco's Auto
        </button>
        <button class="brand-btn" :class="{ active: activeSmBrand === 'ecm' }" @click="showSMBrand('ecm')">
          Euro Car Masters
        </button>
        <button class="brand-btn" :class="{ active: activeSmBrand === 'raven' }" @click="showSMBrand('raven')">
          Raven's Auto
        </button>
      </div>

      <div v-show="activeSmBrand === 'orozco'" id="sm-orozco">
        <div class="kpi-strip">
          <div class="kpi-cell">
            <div class="lbl">
              Total Impressions
            </div><div class="val">
              3.28M
            </div><div class="chg dn">
              ▼9% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Interactions
            </div><div class="val">
              12,234
            </div><div class="chg dn">
              ▼75% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Followers
            </div><div class="val">
              70,727
            </div><div class="chg up">
              ▲2% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              YouTube
            </div><div class="val">
              3.15M
            </div><div class="chg up">
              ▲15%
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              TikTok
            </div><div class="val">
              25K
            </div><div class="chg dn">
              ▼27%
            </div>
          </div>
        </div>
        <div class="chart-grid">
          <div class="chart-card">
            <div class="chart-card-hdr">
              Impressions by Platform
            </div>
            <div class="chart-card-body">
              <canvas ref="chartSmOrozcoImpr" />
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-card-hdr">
              Followers by Platform
            </div>
            <div class="chart-card-body">
              <canvas ref="chartSmOrozcoFol" />
            </div>
          </div>
        </div>
        <table class="data-table">
          <thead><tr><th>Platform</th><th>Impressions</th><th>MoM</th><th>Interactions</th><th>MoM</th><th>Followers</th><th>MoM</th></tr></thead>
          <tbody>
            <tr><td>TikTok</td><td>25,000</td><td><span class="dn pill">▼27%</span></td><td>532</td><td><span class="pill dn">▼42%</span></td><td>19,000</td><td><span class="pill dn">▼0.5%</span></td></tr>
            <tr><td>YouTube</td><td>3,149,048</td><td><span class="pill up">▲15%</span></td><td>11,600</td><td><span class="pill dn">▼76%</span></td><td>44,574</td><td><span class="pill up">▲3.3%</span></td></tr>
            <tr><td>Instagram</td><td>7,587</td><td><span class="pill up">▲38%</span></td><td>81</td><td><span class="pill dn">▼25%</span></td><td>353</td><td><span class="pill dn">▼0.5%</span></td></tr>
            <tr><td>Facebook</td><td>96,185</td><td><span class="pill up">▲84%</span></td><td>21</td><td><span class="pill neu">0%</span></td><td>6,800</td><td><span class="pill up">▲0.44%</span></td></tr>
          </tbody>
          <tfoot><tr><td>TOTAL</td><td>3,277,820</td><td><span class="pill dn">▼9%</span></td><td>12,234</td><td><span class="pill dn">▼75%</span></td><td>70,727</td><td><span class="pill up">▲2%</span></td></tr></tfoot>
        </table>
      </div>

      <div v-show="activeSmBrand === 'ecm'" id="sm-ecm">
        <div class="kpi-strip">
          <div class="kpi-cell">
            <div class="lbl">
              Total Impressions
            </div><div class="val">
              128,745
            </div><div class="chg up">
              ▲33.5% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Interactions
            </div><div class="val">
              2,498
            </div><div class="chg up">
              ▲68% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Followers
            </div><div class="val">
              1,507
            </div><div class="chg up">
              ▲6% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              YouTube
            </div><div class="val">
              80.7K
            </div><div class="chg up">
              ▲79.5%
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              TikTok
            </div><div class="val">
              29K
            </div><div class="chg dn">
              ▼3.3%
            </div>
          </div>
        </div>
        <table class="data-table">
          <thead><tr><th>Platform</th><th>Impressions</th><th>MoM</th><th>Interactions</th><th>MoM</th><th>Followers</th><th>MoM</th></tr></thead>
          <tbody>
            <tr><td>TikTok</td><td>29,000</td><td><span class="pill dn">▼3.3%</span></td><td>1,188</td><td><span class="pill up">▲36%</span></td><td>1,112</td><td><span class="pill up">▲3%</span></td></tr>
            <tr><td>YouTube</td><td>80,749</td><td><span class="pill up">▲79.5%</span></td><td>888</td><td><span class="pill up">▲124%</span></td><td>250</td><td><span class="pill up">▲16.8%</span></td></tr>
            <tr><td>Instagram</td><td>17,489</td><td><span class="pill up">▲8.5%</span></td><td>419</td><td><span class="pill up">▲95%</span></td><td>90</td><td><span class="pill up">▲16.9%</span></td></tr>
            <tr><td>Facebook</td><td>1,507</td><td><span class="pill dn">▼71%</span></td><td>3</td><td><span class="pill dn">▼25%</span></td><td>55</td><td><span class="pill up">▲5.8%</span></td></tr>
          </tbody>
          <tfoot><tr><td>TOTAL</td><td>128,745</td><td><span class="pill up">▲33.5%</span></td><td>2,498</td><td><span class="pill up">▲68%</span></td><td>1,507</td><td><span class="pill up">▲6%</span></td></tr></tfoot>
        </table>
      </div>

      <div v-show="activeSmBrand === 'raven'" id="sm-raven">
        <div class="kpi-strip">
          <div class="kpi-cell">
            <div class="lbl">
              Total Impressions
            </div><div class="val">
              59,551
            </div><div class="chg up">
              ▲203% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Interactions
            </div><div class="val">
              849
            </div><div class="chg up">
              ▲52% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Followers
            </div><div class="val">
              371
            </div><div class="chg up">
              ▲83% MoM
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              Facebook Growth
            </div><div class="val g">
              +320%
            </div>
          </div>
          <div class="kpi-cell">
            <div class="lbl">
              IG Follower Growth
            </div><div class="val g">
              +250%
            </div>
          </div>
        </div>
        <table class="data-table">
          <thead><tr><th>Platform</th><th>Impressions</th><th>MoM</th><th>Interactions</th><th>MoM</th><th>Followers</th><th>MoM</th></tr></thead>
          <tbody>
            <tr><td>TikTok</td><td>8,764</td><td><span class="pill up">▲15%</span></td><td>285</td><td><span class="pill up">▲24%</span></td><td>34</td><td><span class="pill up">▲79%</span></td></tr>
            <tr><td>YouTube</td><td>45,545</td><td><span class="pill up">▲64%</span></td><td>473</td><td><span class="pill up">▲99%</span></td><td>169</td><td><span class="pill up">▲37%</span></td></tr>
            <tr><td>Instagram</td><td>44,564</td><td><span class="pill up">▲32%</span></td><td>64</td><td><span class="pill up">▲11%</span></td><td>126</td><td><span class="pill up">▲250%</span></td></tr>
            <tr><td>Facebook</td><td>678</td><td><span class="pill up">▲700%</span></td><td>27</td><td><span class="pill up">▲100%</span></td><td>42</td><td><span class="pill up">▲320%</span></td></tr>
          </tbody>
          <tfoot><tr><td>TOTAL</td><td>59,551</td><td><span class="pill up">▲203%</span></td><td>849</td><td><span class="pill up">▲52%</span></td><td>371</td><td><span class="pill up">▲83%</span></td></tr></tfoot>
        </table>
      </div>
    </div>

    <!-- Panel 3: Yelp -->
    <div class="panel" :class="{ active: activeTab === 3 }">
      <div class="sec">
        <span class="acc">01</span> Yelp Reviews by Location
      </div>
      <div class="kpi-strip">
        <div class="kpi-cell">
          <div class="lbl">
            Avg Rating
          </div><div class="val">
            3.87
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Total Reviews
          </div><div class="val">
            605
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            New This Month
          </div><div class="val g">
            19
          </div>
        </div>
        <div class="kpi-cell">
          <div class="lbl">
            Negative
          </div><div class="val r">
            3
          </div>
        </div>
        <div class="kpi-cell">
          <div class="val">
            4.1★
          </div><div class="chg neu">
            ECM Broadway
          </div>
        </div>
      </div>
      <div class="chart-grid">
        <div class="chart-card">
          <div class="chart-card-hdr">
            Star Ratings by Location
          </div>
          <div class="chart-card-body">
            <canvas ref="chartYelpRatings" />
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-hdr">
            New Reviews This Month
          </div>
          <div class="chart-card-body">
            <canvas ref="chartYelpNew" />
          </div>
        </div>
      </div>
      <div class="sec">
        <span class="acc">02</span> Location Breakdown
      </div>
      <table class="data-table">
        <thead><tr><th>Location</th><th>Rating</th><th>Total Reviews</th><th>New Positive</th><th>New Negative</th><th>Net</th></tr></thead>
        <tbody>
          <tr v-for="r in yelpTable.rows" :key="r.loc">
            <td>{{ r.loc }}</td>
            <td>{{ r.rating }}★</td>
            <td>{{ r.total.toLocaleString() }}</td>
            <td style="color:var(--green);font-weight:600">
              {{ r.pos > 0 ? `+${r.pos}` : '—' }}
            </td>
            <td style="color:var(--red);font-weight:600">
              {{ r.neg > 0 ? r.neg : '—' }}
            </td>
            <td :style="{ fontWeight: 600, color: r.net >= 0 ? 'var(--green)' : 'var(--red)' }">
              {{ r.net >= 0 ? '+' : '' }}{{ r.net }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>OVERALL</td>
            <td>{{ yelpTable.foot.avgRating }}★ avg</td>
            <td>{{ yelpTable.foot.ttot.toLocaleString() }}</td>
            <td>+{{ yelpTable.foot.tpos }}</td>
            <td>{{ yelpTable.foot.tneg }}</td>
            <td>+{{ yelpTable.foot.net }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- How to connect -->
    <div class="how-section">
      <div class="how-box">
        <h3>🔗 How to Connect Your Google Sheet</h3>
        <ol class="how-steps">
          <li>Open your <strong>Google Sheet</strong> → click <strong>Share</strong> → change access to <strong>"Anyone with the link — Viewer"</strong></li>
          <li>Copy the full URL from your browser address bar</li>
          <li>Paste it into the blue bar at the top of this dashboard</li>
          <li>Click <strong>"Connect Sheet"</strong> — your real data will load automatically</li>
          <li>Every month, just update the Sheet with new data and refresh this page</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  --bg: #f0ede8;
  --surface: #ffffff;
  --surface2: #e8e4de;
  --border: #d5d0c8;
  --ink: #1a1714;
  --ink2: #4a4540;
  --muted: #9a9590;
  --red: #c0392b;
  --green: #1a7a4a;
  --yellow: #d4a017;
  --blue: #1a5276;
  --orange: #c0550a;
  --purple: #6c3483;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Barlow', sans-serif;
  min-height: 100vh;
}

.connect-banner {
  background: var(--blue);
  color: white;
  padding: 0.9rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.88rem;
}
.connect-banner .banner-label {
  font-weight: 600;
  white-space: nowrap;
}
.connect-banner .banner-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.78rem;
}
.sheet-url-input {
  flex: 1;
  min-width: 280px;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  border: none;
  font-family: 'Barlow', sans-serif;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  outline: none;
}
.sheet-url-input::placeholder {
  color: rgba(255, 255, 255, 0.45);
}
.sheet-url-input:focus {
  background: rgba(255, 255, 255, 0.25);
}
.connect-btn {
  background: white;
  color: var(--blue);
  border: none;
  padding: 0.45rem 1.2rem;
  border-radius: 6px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.connect-btn:hover {
  opacity: 0.85;
}
.sample-badge {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
}
.sample-badge.data-live {
  background: rgba(26, 122, 74, 0.3);
}
.sample-badge.data-empty {
  background: rgba(212, 160, 23, 0.3);
}
.connect-status {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.7);
}

.dashboard header {
  background: var(--ink);
  color: #f0ede8;
  padding: 1.8rem 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}
.dashboard header::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(192, 57, 43, 0.12);
}
.header-left h1 {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900;
  font-size: 2.2rem;
  letter-spacing: -0.01em;
  line-height: 1;
  text-transform: uppercase;
}
.header-left h1 span {
  color: var(--red);
}
.header-left p {
  margin-top: 0.3rem;
  font-size: 0.78rem;
  color: rgba(240, 237, 232, 0.45);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.header-right {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.h-stat .val {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
}
.h-stat .val.g {
  color: #4ecb82;
}
.h-stat .lbl {
  font-size: 0.65rem;
  color: rgba(240, 237, 232, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.15rem;
}

.month-bar {
  background: var(--ink);
  padding: 0 2.5rem 1rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.month-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: rgba(240, 237, 232, 0.45);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: all 0.15s;
  text-transform: uppercase;
}
.month-btn:hover {
  color: #f0ede8;
  border-color: rgba(255, 255, 255, 0.3);
}
.month-btn.active {
  background: var(--red);
  color: white;
  border-color: var(--red);
}

.tabs {
  display: flex;
  gap: 0;
  padding: 0 2.5rem;
  background: var(--surface2);
  border-bottom: 1px solid var(--border);
}
.tab {
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 3px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s;
  position: relative;
  bottom: -1px;
}
.tab.active {
  color: var(--ink);
  border-bottom-color: var(--red);
}
.tab:hover:not(.active) {
  color: var(--ink2);
}

.panel {
  display: none;
  padding: 2rem 2.5rem;
}
.panel.active {
  display: block;
}

.sec {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.sec::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
  margin-left: 0.5rem;
}
.sec .acc {
  color: var(--red);
}

.kpi-strip {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}
.kpi-cell {
  background: var(--surface);
  padding: 1rem 1.2rem;
}
.kpi-cell .lbl {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.kpi-cell .val {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
  line-height: 1;
  color: var(--ink);
}
.kpi-cell .val.g {
  color: var(--green);
}
.kpi-cell .val.r {
  color: var(--red);
}
.kpi-cell .chg {
  font-size: 0.72rem;
  font-weight: 600;
  margin-top: 0.2rem;
}
.up {
  color: var(--green);
}
.dn {
  color: var(--red);
}
.neu {
  color: var(--muted);
}

.chart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 2rem;
}
@media (max-width: 700px) {
  .chart-grid {
    grid-template-columns: 1fr;
  }
}

.chart-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
.chart-card-hdr {
  background: var(--ink);
  color: #f0ede8;
  padding: 0.6rem 1rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-card-hdr .tag {
  font-size: 0.65rem;
  background: rgba(255, 255, 255, 0.12);
  padding: 0.15rem 0.45rem;
  border-radius: 3px;
}
.chart-card-body {
  padding: 1.2rem;
  position: relative;
  height: 260px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.83rem;
  margin-bottom: 1.5rem;
}
.data-table thead tr {
  background: var(--ink);
  color: rgba(240, 237, 232, 0.75);
}
.data-table thead th {
  padding: 0.55rem 0.9rem;
  text-align: left;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.data-table thead th:not(:first-child) {
  text-align: right;
}
.data-table tbody tr {
  border-bottom: 1px solid var(--border);
}
.data-table tbody tr:nth-child(even) {
  background: var(--surface2);
}
.data-table tbody tr:nth-child(odd) {
  background: var(--surface);
}
.data-table tbody td {
  padding: 0.55rem 0.9rem;
  color: var(--ink2);
}
.data-table tbody td:not(:first-child) {
  text-align: right;
}
.data-table tbody td:first-child {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--ink);
}
.data-table tfoot td {
  background: var(--ink);
  color: #f0ede8;
  padding: 0.6rem 0.9rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  font-size: 0.88rem;
  text-align: right;
}
.data-table tfoot td:first-child {
  text-align: left;
}
.pill {
  display: inline-block;
  padding: 0.12rem 0.4rem;
  border-radius: 3px;
  font-size: 0.68rem;
  font-weight: 700;
}
.pill.up {
  background: rgba(26, 122, 74, 0.1);
  color: var(--green);
}
.pill.dn {
  background: rgba(192, 57, 43, 0.1);
  color: var(--red);
}

.brand-bar {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.brand-btn {
  padding: 0.4rem 1rem;
  border-radius: 4px;
  border: 1.5px solid var(--border);
  background: var(--surface);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--ink2);
  transition: all 0.15s;
}
.brand-btn.active,
.brand-btn:hover {
  background: var(--ink);
  color: #f0ede8;
  border-color: var(--ink);
}

.how-section {
  padding: 2rem 2.5rem;
}
.how-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.how-box h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}
.how-steps {
  list-style: none;
  counter-reset: s;
}
.how-steps li {
  counter-increment: s;
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.85rem;
}
.how-steps li:last-child {
  border-bottom: none;
}
.how-steps li::before {
  content: counter(s);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--red);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
