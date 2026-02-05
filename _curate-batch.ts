#!/usr/bin/env npx tsx

import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

interface CuratedData {
  description: string
  overview?: string
  hierarchy: string
  graphdl: { actor: string; result: string }
  actions: [string, string][]
  events: [string, string][]
  searches: [string, string][]
  processFlow: string
  raci: [string, string, string, string, string][]
  relatedProcesses: [string, string][]
  relatedDepartments: [string, string][]
  relatedOccupations: [string, string][]
  kpis: [string, string, string][]
  usage: string
}

const ROOT = '/Users/nathanclevenger/projects/headless.ly/.org.ai/processes/03-MarketAndSellProductsAndServices'

const files: Record<string, CuratedData> = {
  // === Remaining 3.4.2 files ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.2-DevelopSalesPartnerAllianceRelationships/11461-ManageDatabaseAndFulfillmentVendors.mdx': {
    description: 'Business-as-Code definition for database and fulfillment vendor management. Models the oversight of vendors responsible for customer databases, mailing lists, order fulfillment, and logistics support for trade sales activities.',
    overview: 'Overseeing vendors that provide customer database management, direct mail fulfillment, order processing, and logistics services. Evaluate vendor capabilities, negotiate contracts, monitor service levels, and ensure vendor operations support trade marketing and sales execution effectively.',
    hierarchy: `graph TD
    A[Develop sales partner/alliance relationships] --> B[Manage database and fulfillment vendors]
    B --> C[Evaluate vendor performance]
    B --> D[Manage contracts]
    B --> E[Monitor SLAs]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'VendorManager', result: 'FulfillmentVendorPortfolio' },
    actions: [
      ['evaluateFulfillmentVendors', 'Assess database and fulfillment vendor capabilities and performance'],
      ['negotiateVendorContracts', 'Negotiate pricing, service levels, and delivery terms with fulfillment vendors'],
      ['monitorServiceLevels', 'Track vendor adherence to agreed service level agreements'],
      ['manageFulfillmentCapacity', 'Ensure vendor capacity aligns with planned promotional and sales volumes'],
    ],
    events: [
      ['fulfillmentVendorsEvaluated', 'Vendor assessment and scoring completed'],
      ['vendorContractsNegotiated', 'Fulfillment vendor contracts finalized'],
      ['serviceLevelsMonitored', 'SLA compliance metrics reviewed for the period'],
      ['fulfillmentCapacityManaged', 'Vendor capacity aligned with upcoming demand'],
    ],
    searches: [
      ['getFulfillmentVendors', 'List current database and fulfillment vendors with status'],
      ['getVendorSLAMetrics', 'Retrieve service level performance data by vendor'],
      ['getVendorCapacity', 'Query available vendor capacity for upcoming periods'],
    ],
    processFlow: `graph TD
    A[evaluateFulfillmentVendors] --> B[negotiateVendorContracts]
    B --> C[monitorServiceLevels]
    C --> D[manageFulfillmentCapacity]
    D --> E{Performance On Track?}
    E -->|Yes| F[Continue Operations]
    E -->|No| G[Issue Corrective Action]
    G --> C`,
    raci: [
      ['evaluateFulfillmentVendors', 'VendorManager', 'SalesOperationsManager', 'Procurement', 'IT'],
      ['negotiateVendorContracts', 'VendorManager', 'VP Sales', 'Legal', 'Finance'],
      ['monitorServiceLevels', 'VendorManager', 'SalesOperationsManager', 'Operations', 'Sales'],
    ],
    relatedProcesses: [
      ['3.4.2.1 Manage data source vendors', 'Parallel - both manage vendor relationships for trade operations'],
      ['3.5.4 Manage sales orders', 'Downstream - fulfillment vendors support order processing'],
      ['7.3.1 Plan for and source materials and services', 'Upstream - procurement framework guides vendor selection'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Primary stakeholder for fulfillment vendor services'],
      ['Procurement', 'Manages vendor sourcing and contracting'],
      ['IT', 'Integrates vendor systems with internal databases'],
      ['Operations', 'Coordinates fulfillment logistics with vendors'],
    ],
    relatedOccupations: [
      ['Vendor Manager', 'Oversees fulfillment vendor relationships'],
      ['Supply Chain Coordinator', 'Manages logistics and fulfillment operations'],
      ['Database Administrator', 'Ensures vendor database quality and integration'],
    ],
    kpis: [
      ['Fulfillment Accuracy', 'Percentage of orders fulfilled correctly by vendors', '%'],
      ['SLA Compliance Rate', 'Percentage of service level targets met', '%'],
      ['Vendor Cost Efficiency', 'Cost per unit fulfilled relative to benchmark', 'USD'],
    ],
    usage: `import { manageDatabaseAndFulfillmentVendors } from '@headlessly/manage-database-and-fulfillment-vendors'

const fulfillment = manageDatabaseAndFulfillmentVendors()

// Monitor vendor service levels
const sla = await fulfillment.monitorServiceLevels({
  vendorId: 'fulfillment-vendor-a',
  metrics: ['order-accuracy', 'on-time-delivery', 'response-time'],
  period: 'last-quarter'
})

// Manage capacity for upcoming campaign
const capacity = await fulfillment.manageFulfillmentCapacity({
  vendorId: 'fulfillment-vendor-a',
  expectedVolume: 50000,
  period: 'next-month'
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.2-DevelopSalesPartnerAllianceRelationships/11462-ManageCreativeMediaServiceProviders.mdx': {
    description: 'Business-as-Code definition for creative and media service provider management. Models the oversight of advertising agencies, media buying firms, and creative production companies that support trade marketing and sales communications.',
    overview: 'Managing relationships with advertising agencies, media buying firms, graphic design studios, and creative production companies. Select and evaluate providers, negotiate scopes of work, review creative output quality, and ensure provider deliverables align with brand guidelines and trade marketing objectives.',
    hierarchy: `graph TD
    A[Develop sales partner/alliance relationships] --> B[Manage creative/media service providers]
    B --> C[Select providers]
    B --> D[Brief creative projects]
    B --> E[Review deliverables]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'TradeMarketingManager', result: 'CreativeServiceProviderPortfolio' },
    actions: [
      ['selectCreativeProviders', 'Evaluate and select agencies and production companies for trade marketing work'],
      ['briefCreativeProjects', 'Develop creative briefs and scopes of work for provider engagements'],
      ['reviewCreativeOutput', 'Assess deliverable quality against brand guidelines and brief requirements'],
      ['manageProviderBudgets', 'Track spend against approved budgets for creative and media services'],
    ],
    events: [
      ['creativeProvidersSelected', 'Agency or production company selected for engagement'],
      ['creativeProjectsBriefed', 'Creative briefs issued to providers'],
      ['creativeOutputReviewed', 'Deliverable quality review completed'],
      ['providerBudgetsManaged', 'Creative service spend tracked and reconciled'],
    ],
    searches: [
      ['getCreativeProviders', 'List current creative and media service providers'],
      ['getProjectStatus', 'Retrieve status of active creative projects by provider'],
      ['getCreativeBudget', 'Access budget allocation and spend for creative services'],
    ],
    processFlow: `graph TD
    A[selectCreativeProviders] --> B[briefCreativeProjects]
    B --> C[reviewCreativeOutput]
    C --> D{Quality Approved?}
    D -->|Yes| E[Approve Deliverables]
    D -->|No| F[Request Revisions]
    F --> C
    E --> G[manageProviderBudgets]`,
    raci: [
      ['selectCreativeProviders', 'TradeMarketingManager', 'VP Marketing', 'Procurement', 'BrandManager'],
      ['briefCreativeProjects', 'TradeMarketingManager', 'VP Marketing', 'Sales', 'BrandManager'],
      ['reviewCreativeOutput', 'TradeMarketingManager', 'BrandManager', 'Legal', 'Sales'],
    ],
    relatedProcesses: [
      ['3.3.3 Develop marketing communications strategy', 'Upstream - communications strategy guides creative direction'],
      ['3.4.2.14 Develop promotional and category management calendars', 'Downstream - creative assets support planned promotions'],
      ['3.4.2.1 Manage data source vendors', 'Parallel - both manage external service providers'],
    ],
    relatedDepartments: [
      ['Trade Marketing', 'Manages creative provider relationships and briefs'],
      ['Brand Management', 'Ensures creative output meets brand standards'],
      ['Procurement', 'Handles provider selection and contract negotiation'],
      ['Legal', 'Reviews creative content for compliance and IP issues'],
    ],
    relatedOccupations: [
      ['Trade Marketing Manager', 'Oversees creative service provider relationships'],
      ['Brand Manager', 'Reviews creative output for brand compliance'],
      ['Creative Project Manager', 'Coordinates creative production timelines'],
    ],
    kpis: [
      ['Creative Delivery On-Time Rate', 'Percentage of projects delivered by deadline', '%'],
      ['Revision Rate', 'Average number of revision rounds per deliverable', 'Count'],
      ['Creative Budget Variance', 'Actual vs. budgeted spend for creative services', '%'],
    ],
    usage: `import { manageCreativeMediaServiceProviders } from '@headlessly/manage-creative-media-service-providers'

const creative = manageCreativeMediaServiceProviders()

// Brief a new creative project
const brief = await creative.briefCreativeProjects({
  providerId: 'agency-a',
  projectType: 'trade-promotion-materials',
  deliverables: ['point-of-sale-display', 'digital-banner-set'],
  deadline: '2026-03-15'
})

// Review creative output
const review = await creative.reviewCreativeOutput({
  projectId: brief.projectId,
  checkBrandCompliance: true,
  reviewers: ['brand-manager', 'trade-marketing-lead']
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.2-DevelopSalesPartnerAllianceRelationships/11522-DevelopPromotionalAndCategoryManagementCalendarsTradeMarketingCalendars.mdx': {
    description: 'Business-as-Code definition for promotional and trade marketing calendar development. Models the unification of promotional events, category management activities, and trade marketing initiatives into coordinated timetables.',
    hierarchy: `graph TD
    A[Develop sales partner/alliance relationships] --> B[Develop promotional and category management calendars]
    B --> C[Consolidate event schedules]
    B --> D[Resolve conflicts]
    B --> E[Publish calendars]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'TradeMarketingManager', result: 'TradeMarketingCalendar' },
    actions: [
      ['consolidateEventSchedules', 'Merge promotional, category management, and trade marketing event schedules'],
      ['resolveScheduleConflicts', 'Identify and resolve timing conflicts between overlapping events'],
      ['alignWithRetailCalendars', 'Synchronize trade marketing calendars with key retailer event cycles'],
      ['publishTradeCalendars', 'Distribute finalized calendars to sales teams and trade partners'],
      ['updateCalendarEvents', 'Add, modify, or cancel events as plans evolve'],
    ],
    events: [
      ['eventSchedulesConsolidated', 'Multiple event schedules merged into unified calendar'],
      ['scheduleConflictsResolved', 'Timing conflicts between events addressed'],
      ['retailCalendarsAligned', 'Trade calendars synchronized with retailer cycles'],
      ['tradeCalendarsPublished', 'Finalized calendars distributed to stakeholders'],
      ['calendarEventsUpdated', 'Calendar modifications communicated to teams'],
    ],
    searches: [
      ['getTradeCalendar', 'Retrieve trade marketing calendar by period or customer'],
      ['getUpcomingEvents', 'List upcoming promotional and category events'],
      ['getCalendarConflicts', 'Identify scheduling conflicts in the trade calendar'],
    ],
    processFlow: `graph TD
    A[consolidateEventSchedules] --> B[resolveScheduleConflicts]
    B --> C[alignWithRetailCalendars]
    C --> D[publishTradeCalendars]
    D --> E{Changes Needed?}
    E -->|Yes| F[updateCalendarEvents]
    F --> B
    E -->|No| G[Execute Calendar]`,
    raci: [
      ['consolidateEventSchedules', 'TradeMarketingManager', 'VP Sales', 'Marketing', 'CategoryManagement'],
      ['resolveScheduleConflicts', 'TradeMarketingManager', 'VP Sales', 'Sales', 'Marketing'],
      ['publishTradeCalendars', 'TradeMarketingManager', 'VP Sales', 'Sales', 'Partners'],
    ],
    relatedProcesses: [
      ['3.4.2.8 Collaborate with trade customers to create sales and promo plan', 'Upstream - joint plans feed into calendar'],
      ['3.4.3 Perform category management', 'Parallel - category events included in calendar'],
      ['3.3.6 Manage trade pricing, promotions and allowances', 'Parallel - promotional events coordinated with pricing'],
    ],
    relatedDepartments: [
      ['Trade Marketing', 'Owns and manages the unified trade calendar'],
      ['Sales', 'Executes planned events at customer level'],
      ['Category Management', 'Contributes category-specific events and resets'],
      ['Marketing', 'Aligns brand campaigns with trade promotional timing'],
    ],
    relatedOccupations: [
      ['Trade Marketing Manager', 'Creates and maintains trade marketing calendars'],
      ['Category Manager', 'Contributes category event schedules'],
      ['Sales Planner', 'Uses calendars to plan customer activities'],
    ],
    kpis: [
      ['Calendar Adherence', 'Percentage of planned events executed as scheduled', '%'],
      ['Schedule Conflict Rate', 'Number of unresolved conflicts per calendar cycle', 'Count'],
      ['Calendar Publication Lead Time', 'Days between calendar finalization and distribution', 'Days'],
    ],
    usage: `import { developPromotionalAndCategoryManagementCalendarsTradeMarketingCalendars } from '@headlessly/develop-promotional-and-category-management-calendars-trade-marketing-calendars'

const calendar = developPromotionalAndCategoryManagementCalendarsTradeMarketingCalendars()

// Consolidate event schedules
const unified = await calendar.consolidateEventSchedules({
  sources: ['promotions', 'category-resets', 'trade-shows'],
  period: 'fiscal-year-2026'
})

// Publish to teams
await calendar.publishTradeCalendars({
  calendarId: unified.id,
  recipients: ['sales-teams', 'trade-partners', 'category-managers']
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.2-DevelopSalesPartnerAllianceRelationships/11523-CreateStrategicAndTacticalSalesPlansByCustomer.mdx': {
    description: 'Business-as-Code definition for customer-level sales plan creation. Models the development of both strategic long-term and tactical short-term sales plans for individual customer accounts.',
    hierarchy: `graph TD
    A[Develop sales partner/alliance relationships] --> B[Create strategic and tactical sales plans by customer]
    B --> C[Assess current sales position]
    B --> D[Set strategic objectives]
    B --> E[Define tactical actions]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'KeyAccountManager', result: 'CustomerSalesPlan' },
    actions: [
      ['assessCurrentPosition', 'Evaluate current sales performance and share at each customer account'],
      ['setStrategicObjectives', 'Define long-term growth, retention, and expansion goals per customer'],
      ['defineTacticalActions', 'Identify short-term initiatives, promotions, and sales activities per customer'],
      ['allocateCustomerResources', 'Assign sales team members, budgets, and support resources to each plan'],
      ['documentCustomerPlans', 'Compile strategic and tactical plans into formal customer plan documents'],
    ],
    events: [
      ['currentPositionAssessed', 'Customer sales baseline and performance evaluated'],
      ['strategicObjectivesSet', 'Long-term customer growth goals established'],
      ['tacticalActionsDefined', 'Short-term sales activities and initiatives planned'],
      ['customerResourcesAllocated', 'Resources assigned to customer plans'],
      ['customerPlansDocumented', 'Formal customer sales plans completed and distributed'],
    ],
    searches: [
      ['getCustomerSalesPlan', 'Retrieve strategic or tactical plan for a specific customer'],
      ['getCustomerPerformance', 'Access current sales performance data by customer'],
      ['getPlanProgress', 'Track execution progress against customer plan objectives'],
    ],
    processFlow: `graph TD
    A[assessCurrentPosition] --> B[setStrategicObjectives]
    B --> C[defineTacticalActions]
    C --> D[allocateCustomerResources]
    D --> E[documentCustomerPlans]
    E --> F{Plans Approved?}
    F -->|Yes| G[Execute Plans]
    F -->|No| H[Revise Objectives]
    H --> B`,
    raci: [
      ['assessCurrentPosition', 'KeyAccountManager', 'SalesDirector', 'Finance', 'Marketing'],
      ['setStrategicObjectives', 'KeyAccountManager', 'VP Sales', 'Strategy', 'Finance'],
      ['defineTacticalActions', 'KeyAccountManager', 'SalesDirector', 'TradeMarketing', 'Operations'],
      ['documentCustomerPlans', 'KeyAccountManager', 'SalesDirector', 'SalesOperations', 'VP Sales'],
    ],
    relatedProcesses: [
      ['3.4.2.5 Develop customer trade strategy and customer objectives/targets', 'Upstream - trade strategy informs customer plans'],
      ['3.4.2.16 Communicate planning information to customer teams', 'Downstream - completed plans communicated to teams'],
      ['3.5.2 Manage customers and accounts', 'Downstream - plans guide account management activities'],
    ],
    relatedDepartments: [
      ['Sales', 'Creates and executes customer-level sales plans'],
      ['Trade Marketing', 'Contributes promotional tactics for customer plans'],
      ['Finance', 'Validates revenue targets and resource allocations'],
      ['Sales Operations', 'Provides performance data and plan templates'],
    ],
    relatedOccupations: [
      ['Key Account Manager', 'Creates strategic and tactical plans for assigned customers'],
      ['Sales Director', 'Reviews and approves customer sales plans'],
      ['Sales Planner', 'Supports plan development with data and templates'],
    ],
    kpis: [
      ['Plan Coverage', 'Percentage of key customers with documented sales plans', '%'],
      ['Strategic Objective Achievement', 'Percentage of long-term customer goals met', '%'],
      ['Tactical Execution Rate', 'Percentage of planned tactical actions completed', '%'],
    ],
    usage: `import { createStrategicAndTacticalSalesPlansByCustomer } from '@headlessly/create-strategic-and-tactical-sales-plans-by-customer'

const plans = createStrategicAndTacticalSalesPlansByCustomer()

// Assess current position at a customer
const baseline = await plans.assessCurrentPosition({
  customerId: 'retailer-a',
  metrics: ['revenue', 'share-of-category', 'distribution-points']
})

// Set strategic objectives
const objectives = await plans.setStrategicObjectives({
  customerId: 'retailer-a',
  revenueGrowthTarget: 0.15,
  shareTarget: 0.30,
  horizon: '3-years'
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.2-DevelopSalesPartnerAllianceRelationships/11468-CommunicatePlanningInformationToCustomerTeams.mdx': {
    description: 'Business-as-Code definition for planning information communication. Models the distribution of event invitations, planning documents, and strategic information to customer-facing teams and trade partners.',
    hierarchy: `graph TD
    A[Develop sales partner/alliance relationships] --> B[Communicate planning information to customer teams]
    B --> C[Prepare communications]
    B --> D[Distribute to teams]
    B --> E[Confirm receipt]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'SalesOperationsManager', result: 'PlanningCommunicationRecord' },
    actions: [
      ['preparePlanningMaterials', 'Compile planning documents, calendars, and briefing packages for distribution'],
      ['distributeToTeams', 'Send planning information to customer-facing sales teams and support staff'],
      ['sendEventInvitations', 'Issue invitations for upcoming planning sessions, reviews, and trade events'],
      ['confirmReceipt', 'Verify that customer teams have received and acknowledged planning materials'],
    ],
    events: [
      ['planningMaterialsPrepared', 'Planning documents compiled and ready for distribution'],
      ['materialsDistributed', 'Planning information sent to customer teams'],
      ['eventInvitationsSent', 'Event invitations distributed to relevant stakeholders'],
      ['receiptConfirmed', 'Acknowledgment received from customer team members'],
    ],
    searches: [
      ['getPlanningCommunications', 'Retrieve planning communications by customer or period'],
      ['getDistributionStatus', 'Track delivery and acknowledgment status of planning materials'],
      ['getEventInvitations', 'List sent event invitations with RSVP status'],
    ],
    processFlow: `graph TD
    A[preparePlanningMaterials] --> B[distributeToTeams]
    B --> C[sendEventInvitations]
    C --> D[confirmReceipt]
    D --> E{All Acknowledged?}
    E -->|Yes| F[Close Communication Cycle]
    E -->|No| G[Follow Up]
    G --> D`,
    raci: [
      ['preparePlanningMaterials', 'SalesOperationsManager', 'VP Sales', 'TradeMarketing', 'Sales'],
      ['distributeToTeams', 'SalesOperationsManager', 'VP Sales', 'IT', 'KeyAccountManagers'],
      ['confirmReceipt', 'SalesCoordinator', 'SalesOperationsManager', 'Sales', 'HR'],
    ],
    relatedProcesses: [
      ['3.4.2.15 Create strategic and tactical sales plans by customer', 'Upstream - completed plans are communicated'],
      ['3.4.2.7 Conduct planning activities for major trade customers', 'Upstream - planning session outcomes distributed'],
      ['3.5.2 Manage customers and accounts', 'Downstream - teams use planning info in account management'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Manages planning information distribution'],
      ['Sales', 'Receives and acts on planning information'],
      ['Trade Marketing', 'Contributes promotional planning materials'],
      ['IT', 'Supports communication platform and delivery tracking'],
    ],
    relatedOccupations: [
      ['Sales Operations Manager', 'Coordinates planning information distribution'],
      ['Sales Coordinator', 'Manages communication logistics and follow-up'],
      ['Key Account Manager', 'Primary recipient of customer-specific planning info'],
    ],
    kpis: [
      ['Distribution Timeliness', 'Percentage of materials distributed before deadline', '%'],
      ['Acknowledgment Rate', 'Percentage of recipients who confirmed receipt', '%'],
      ['Communication Satisfaction', 'Team rating of planning communication quality', 'Score (1-5)'],
    ],
    usage: `import { communicatePlanningInformationToCustomerTeams } from '@headlessly/communicate-planning-information-to-customer-teams'

const comms = communicatePlanningInformationToCustomerTeams()

// Distribute planning materials
await comms.distributeToTeams({
  materials: ['q2-trade-calendar', 'customer-plan-retailer-a'],
  recipients: ['midwest-sales-team', 'key-account-managers'],
  deadline: '2026-03-01'
})

// Send event invitations
await comms.sendEventInvitations({
  event: 'annual-trade-planning-session',
  invitees: ['sales-directors', 'category-managers', 'trade-marketing'],
  date: '2026-04-15'
})`,
  },

  // === 3.4.3 files ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.3-PerformCategoryManagement/11470-AnalyzeCategoryProductPositioningAndPerformance.mdx': {
    description: 'Business-as-Code definition for category and product positioning analysis. Models the evaluation of product category positioning relative to competitors and assessment of category performance metrics.',
    overview: 'Evaluating the competitive positioning and financial performance of product categories within the portfolio. Analyze category market share, shelf placement, pricing position, and consumer demand patterns. Compare category performance against industry benchmarks and competitor offerings to identify optimization opportunities.',
    hierarchy: `graph TD
    A[Perform category management] --> B[Analyze category/product positioning and performance]
    B --> C[Assess category market share]
    B --> D[Evaluate pricing position]
    B --> E[Benchmark against competitors]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'CategoryManager', result: 'CategoryPerformanceReport' },
    actions: [
      ['assessCategoryMarketShare', 'Calculate market share by product category against total market'],
      ['evaluatePricingPosition', 'Compare category price points against competitor benchmarks'],
      ['analyzeCategoryProfitability', 'Assess gross margin, contribution, and ROI by category'],
      ['benchmarkCategoryPerformance', 'Compare category metrics against industry standards and competitors'],
      ['identifyOptimizationOpportunities', 'Flag categories with growth potential or underperformance'],
    ],
    events: [
      ['categoryMarketShareAssessed', 'Market share by category calculated and documented'],
      ['pricingPositionEvaluated', 'Category pricing compared to competitors'],
      ['categoryProfitabilityAnalyzed', 'Category financial performance metrics computed'],
      ['categoryBenchmarked', 'Performance compared against industry standards'],
      ['optimizationOpportunitiesIdentified', 'Growth and improvement opportunities flagged'],
    ],
    searches: [
      ['getCategoryPerformance', 'Retrieve performance metrics by product category'],
      ['getCategoryMarketShare', 'Access market share data by category and region'],
      ['getCategoryBenchmarks', 'Query industry benchmarks for category comparison'],
    ],
    processFlow: `graph TD
    A[assessCategoryMarketShare] --> B[evaluatePricingPosition]
    B --> C[analyzeCategoryProfitability]
    C --> D[benchmarkCategoryPerformance]
    D --> E[identifyOptimizationOpportunities]
    E --> F{Action Required?}
    F -->|Yes| G[Recommend Strategy Changes]
    F -->|No| H[Maintain Current Approach]`,
    raci: [
      ['assessCategoryMarketShare', 'CategoryManager', 'VP Marketing', 'MarketResearch', 'Sales'],
      ['analyzeCategoryProfitability', 'CategoryManager', 'VP Marketing', 'Finance', 'ProductManagement'],
      ['identifyOptimizationOpportunities', 'CategoryManager', 'VP Sales', 'Strategy', 'Marketing'],
    ],
    relatedProcesses: [
      ['3.4.3.2 Select category/product strategy', 'Downstream - analysis informs strategy selection'],
      ['3.4.1.4 Analyze point of sales (POS) data and market/competitive information', 'Upstream - POS data feeds category analysis'],
      ['3.1.1 Perform customer and market intelligence analysis', 'Upstream - market intelligence provides context'],
    ],
    relatedDepartments: [
      ['Category Management', 'Owns category analysis and optimization'],
      ['Marketing', 'Provides market data and competitive intelligence'],
      ['Finance', 'Validates profitability and ROI metrics'],
      ['Sales', 'Provides sell-through data and customer feedback'],
    ],
    relatedOccupations: [
      ['Category Manager', 'Performs category positioning and performance analysis'],
      ['Market Research Analyst', 'Provides market share and competitive data'],
      ['Pricing Analyst', 'Evaluates category pricing competitiveness'],
    ],
    kpis: [
      ['Category Market Share', 'Share of total market sales by category', '%'],
      ['Category Profitability', 'Gross margin contribution by product category', '%'],
      ['Price Competitiveness Index', 'Category price position vs. key competitors', 'Index'],
    ],
    usage: `import { analyzeCategoryProductPositioningAndPerformance } from '@headlessly/analyze-category-product-positioning-and-performance'

const category = analyzeCategoryProductPositioningAndPerformance()

// Assess category market share
const share = await category.assessCategoryMarketShare({
  categories: ['enterprise-platform', 'analytics', 'integrations'],
  market: 'north-america',
  period: 'last-4-quarters'
})

// Benchmark against competitors
const benchmarks = await category.benchmarkCategoryPerformance({
  category: 'enterprise-platform',
  competitors: ['competitor-a', 'competitor-b'],
  metrics: ['market-share', 'price-index', 'growth-rate']
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.3-PerformCategoryManagement/11471-SelectCategoryProductStrategy.mdx': {
    description: 'Business-as-Code definition for category strategy selection. Models the decision process for choosing growth, harvest, maintain, or divest strategies for each product category based on performance analysis.',
    overview: 'Selecting the optimal strategic approach for each product category based on positioning analysis and performance data. Evaluate whether to grow, maintain, harvest, or divest each category. Define category-level objectives, assortment strategies, pricing approaches, and promotional tactics that align with overall business goals.',
    hierarchy: `graph TD
    A[Perform category management] --> B[Select category/product strategy]
    B --> C[Evaluate strategic options]
    B --> D[Select category approach]
    B --> E[Define category objectives]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'CategoryManager', result: 'CategoryStrategyPlan' },
    actions: [
      ['evaluateStrategicOptions', 'Assess grow, maintain, harvest, and divest options for each category'],
      ['selectCategoryApproach', 'Choose the strategic direction for each product category'],
      ['defineCategoryObjectives', 'Set specific targets for revenue, margin, and market share by category'],
      ['designAssortmentStrategy', 'Determine optimal product mix and SKU rationalization per category'],
      ['approveStrategySelection', 'Obtain leadership sign-off on selected category strategies'],
    ],
    events: [
      ['strategicOptionsEvaluated', 'Category strategy alternatives analyzed and compared'],
      ['categoryApproachSelected', 'Strategic direction chosen for each category'],
      ['categoryObjectivesDefined', 'Category-level targets established'],
      ['assortmentStrategyDesigned', 'Product mix and SKU plan finalized per category'],
      ['strategySelectionApproved', 'Category strategies approved by leadership'],
    ],
    searches: [
      ['getCategoryStrategy', 'Retrieve selected strategy for a specific category'],
      ['getCategoryObjectives', 'Access targets and objectives by product category'],
      ['getAssortmentPlan', 'Query product mix and SKU decisions per category'],
    ],
    processFlow: `graph TD
    A[evaluateStrategicOptions] --> B[selectCategoryApproach]
    B --> C[defineCategoryObjectives]
    C --> D[designAssortmentStrategy]
    D --> E[approveStrategySelection]
    E --> F{Approved?}
    F -->|Yes| G[Execute Category Plans]
    F -->|No| H[Revise Strategy]
    H --> A`,
    raci: [
      ['evaluateStrategicOptions', 'CategoryManager', 'VP Marketing', 'Finance', 'ProductManagement'],
      ['selectCategoryApproach', 'CategoryManager', 'VP Sales', 'Strategy', 'ExecutiveTeam'],
      ['defineCategoryObjectives', 'CategoryManager', 'VP Sales', 'Finance', 'Sales'],
    ],
    relatedProcesses: [
      ['3.4.3.1 Analyze category/product positioning and performance', 'Upstream - performance analysis informs strategy selection'],
      ['3.4.2.5 Develop customer trade strategy and customer objectives/targets', 'Downstream - category strategy feeds customer-level planning'],
      ['2.5.1 Develop product/service strategy', 'Upstream - product strategy provides portfolio direction'],
    ],
    relatedDepartments: [
      ['Category Management', 'Selects and executes category strategies'],
      ['Product Management', 'Aligns product roadmap with category strategy'],
      ['Sales', 'Executes category strategy at customer level'],
      ['Finance', 'Validates category financial targets'],
    ],
    relatedOccupations: [
      ['Category Manager', 'Selects and manages category strategies'],
      ['Product Manager', 'Contributes product lifecycle inputs to strategy'],
      ['Strategic Planner', 'Aligns category strategy with corporate objectives'],
    ],
    kpis: [
      ['Category Revenue Growth', 'Year-over-year revenue change by category', '%'],
      ['SKU Rationalization Rate', 'Percentage of underperforming SKUs removed or replaced', '%'],
      ['Strategy Execution Score', 'Rating of how well selected strategies are being implemented', 'Score (1-10)'],
    ],
    usage: `import { selectCategoryProductStrategy } from '@headlessly/select-category-product-strategy'

const categoryStrategy = selectCategoryProductStrategy()

// Evaluate strategic options
const options = await categoryStrategy.evaluateStrategicOptions({
  category: 'analytics',
  options: ['grow', 'maintain', 'harvest', 'divest'],
  criteria: ['market-growth', 'profitability', 'competitive-position']
})

// Select category approach
const selected = await categoryStrategy.selectCategoryApproach({
  category: 'analytics',
  strategy: 'grow',
  investmentLevel: 'high'
})`,
  },

  // === 3.4.4 files ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/17682-CalculateProductMarketShare.mdx': {
    description: 'Business-as-Code definition for product market share calculation. Models the determination of the organization\'s percentage of total market sales volume for each product in the portfolio.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Calculate product market share]
    B --> C[Collect market size data]
    B --> D[Compute share metrics]
    B --> E[Track share trends]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'MarketAnalyst', result: 'ProductMarketShareReport' },
    actions: [
      ['collectMarketSizeData', 'Gather total addressable market volume from syndicated and internal sources'],
      ['computeShareByProduct', 'Calculate market share percentage for each product against total market'],
      ['trackShareTrends', 'Monitor market share changes over time to identify gains or losses'],
      ['compareCompetitorShares', 'Benchmark product shares against key competitor positions'],
    ],
    events: [
      ['marketSizeDataCollected', 'Total market volume data gathered and validated'],
      ['shareByProductComputed', 'Market share percentages calculated for all products'],
      ['shareTrendsTracked', 'Market share movement over time documented'],
      ['competitorSharesCompared', 'Competitive share benchmarks updated'],
    ],
    searches: [
      ['getProductMarketShare', 'Retrieve market share data by product and geography'],
      ['getShareTrends', 'Access market share trends over time for a product'],
      ['getCompetitorShares', 'Query competitor market share positions'],
    ],
    processFlow: `graph TD
    A[collectMarketSizeData] --> B[computeShareByProduct]
    B --> C[compareCompetitorShares]
    C --> D[trackShareTrends]
    D --> E{Share Declining?}
    E -->|Yes| F[Flag for Strategic Review]
    E -->|No| G[Continue Monitoring]`,
    raci: [
      ['collectMarketSizeData', 'MarketAnalyst', 'SalesOperationsManager', 'IT', 'Finance'],
      ['computeShareByProduct', 'MarketAnalyst', 'VP Sales', 'Finance', 'Marketing'],
      ['trackShareTrends', 'MarketAnalyst', 'VP Sales', 'Strategy', 'ExecutiveTeam'],
    ],
    relatedProcesses: [
      ['3.4.4.2 Calculate product revenue', 'Parallel - revenue data feeds share calculation'],
      ['3.4.1.4 Analyze point of sales (POS) data and market/competitive information', 'Upstream - POS and market data sourced here'],
      ['1.1.1 Assess the external environment', 'Upstream - market sizing from external analysis'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Manages market share tracking processes'],
      ['Marketing', 'Provides market size estimates and competitive data'],
      ['Finance', 'Validates revenue figures used in share calculations'],
      ['Strategy', 'Uses market share data for strategic planning'],
    ],
    relatedOccupations: [
      ['Market Analyst', 'Calculates and tracks product market share'],
      ['Competitive Intelligence Analyst', 'Provides competitor share data'],
      ['Financial Analyst', 'Validates revenue inputs for share computation'],
    ],
    kpis: [
      ['Market Share', 'Product revenue as percentage of total market', '%'],
      ['Share Change', 'Period-over-period market share movement', 'Percentage Points'],
      ['Data Currency', 'Age of most recent market size data used', 'Days'],
    ],
    usage: `import { calculateProductMarketShare } from '@headlessly/calculate-product-market-share'

const marketShare = calculateProductMarketShare()

// Compute share by product
const share = await marketShare.computeShareByProduct({
  products: ['platform-standard', 'platform-enterprise'],
  market: 'enterprise-saas',
  period: 'last-4-quarters'
})

// Track share trends
const trends = await marketShare.trackShareTrends({
  product: 'platform-enterprise',
  granularity: 'quarterly',
  lookback: '3-years'
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/10143-CalculateProductRevenue.mdx': {
    description: 'Business-as-Code definition for product revenue calculation. Models the estimation of revenue from product and service sales by multiplying anticipated volumes by selling prices across the portfolio.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Calculate product revenue]
    B --> C[Estimate sales volumes]
    B --> D[Apply pricing]
    B --> E[Aggregate revenue projections]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'FinancialPlanningAnalyst', result: 'ProductRevenueProjection' },
    actions: [
      ['estimateSalesVolumes', 'Project unit volumes by product using forecast and pipeline data'],
      ['applyPricingAssumptions', 'Multiply estimated volumes by current and planned selling prices'],
      ['segmentRevenueStreams', 'Break down revenue by product line, geography, and customer segment'],
      ['aggregateRevenueProjections', 'Consolidate product-level projections into total revenue estimate'],
      ['validateAgainstForecast', 'Cross-check revenue calculations against approved sales forecast'],
    ],
    events: [
      ['salesVolumesEstimated', 'Product volume projections completed'],
      ['pricingAssumptionsApplied', 'Revenue calculated using selling price models'],
      ['revenueStreamsSegmented', 'Revenue broken down by product, geography, and segment'],
      ['revenueProjectionsAggregated', 'Total revenue projection consolidated'],
      ['revenueValidatedAgainstForecast', 'Revenue calculations verified against sales forecast'],
    ],
    searches: [
      ['getProductRevenue', 'Retrieve revenue projections by product, period, or geography'],
      ['getRevenueBySegment', 'Access revenue breakdowns by customer segment'],
      ['getRevenueVsForecast', 'Compare revenue projections against approved forecast'],
    ],
    processFlow: `graph TD
    A[estimateSalesVolumes] --> B[applyPricingAssumptions]
    B --> C[segmentRevenueStreams]
    C --> D[aggregateRevenueProjections]
    D --> E[validateAgainstForecast]
    E --> F{Variance Acceptable?}
    F -->|Yes| G[Approve Revenue Estimate]
    F -->|No| H[Adjust Assumptions]
    H --> A`,
    raci: [
      ['estimateSalesVolumes', 'SalesForecastAnalyst', 'SalesOperationsManager', 'Sales', 'Marketing'],
      ['applyPricingAssumptions', 'FinancialPlanningAnalyst', 'CFO', 'Pricing', 'Sales'],
      ['aggregateRevenueProjections', 'FinancialPlanningAnalyst', 'CFO', 'VP Sales', 'ExecutiveTeam'],
    ],
    relatedProcesses: [
      ['3.4.4.3 Determine variable costs', 'Downstream - revenue minus variable costs informs margin'],
      ['3.4.4.1 Calculate product market share', 'Parallel - market share context for revenue projections'],
      ['3.4.1.3 Generate sales forecast', 'Upstream - forecast provides volume assumptions'],
    ],
    relatedDepartments: [
      ['Finance', 'Calculates and validates revenue projections'],
      ['Sales Operations', 'Provides volume estimates and forecast data'],
      ['Pricing', 'Supplies current and planned pricing models'],
      ['Product Management', 'Contributes product lifecycle revenue expectations'],
    ],
    relatedOccupations: [
      ['Financial Planning Analyst', 'Builds product revenue projections'],
      ['Sales Forecast Analyst', 'Provides volume estimates for revenue calculation'],
      ['Pricing Analyst', 'Supplies pricing assumptions and models'],
    ],
    kpis: [
      ['Revenue Projection Accuracy', 'Variance between projected and actual product revenue', '%'],
      ['Revenue Growth Rate', 'Year-over-year revenue change by product', '%'],
      ['Average Selling Price', 'Mean transaction price across product sales', 'USD'],
    ],
    usage: `import { calculateProductRevenue } from '@headlessly/calculate-product-revenue'

const revenue = calculateProductRevenue()

// Estimate product revenue
const projection = await revenue.estimateSalesVolumes({
  products: ['platform-standard', 'platform-enterprise', 'analytics-add-on'],
  method: 'forecast-based',
  period: 'fiscal-year-2026'
})

// Aggregate revenue projections
const total = await revenue.aggregateRevenueProjections({
  projections: projection.map(p => p.id),
  segmentBy: ['product-line', 'geography']
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/10144-DetermineVariableCosts.mdx': {
    description: 'Business-as-Code definition for variable cost determination. Models the calculation of costs that fluctuate with production and sales volume, including materials, commissions, and transaction fees.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Determine variable costs]
    B --> C[Identify cost components]
    B --> D[Calculate per-unit costs]
    B --> E[Project total variable costs]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'FinancialPlanningAnalyst', result: 'VariableCostProjection' },
    actions: [
      ['identifyCostComponents', 'Catalog all cost elements that vary with production or sales volume'],
      ['calculatePerUnitCosts', 'Determine the variable cost per unit for each product or service'],
      ['projectTotalVariableCosts', 'Multiply per-unit costs by forecasted volumes to get total variable costs'],
      ['analyzeVariableCostTrends', 'Track changes in variable cost rates over time'],
    ],
    events: [
      ['costComponentsIdentified', 'Variable cost elements cataloged for all products'],
      ['perUnitCostsCalculated', 'Per-unit variable costs determined by product'],
      ['totalVariableCostsProjected', 'Total variable cost projections completed'],
      ['variableCostTrendsAnalyzed', 'Cost rate trends documented and reported'],
    ],
    searches: [
      ['getVariableCosts', 'Retrieve variable cost data by product or cost component'],
      ['getPerUnitCost', 'Access per-unit variable cost for a specific product'],
      ['getCostTrends', 'Query variable cost trends over time'],
    ],
    processFlow: `graph TD
    A[identifyCostComponents] --> B[calculatePerUnitCosts]
    B --> C[projectTotalVariableCosts]
    C --> D[analyzeVariableCostTrends]
    D --> E{Costs Within Target?}
    E -->|Yes| F[Approve Cost Projections]
    E -->|No| G[Investigate Cost Drivers]
    G --> B`,
    raci: [
      ['identifyCostComponents', 'FinancialPlanningAnalyst', 'CFO', 'Operations', 'Procurement'],
      ['calculatePerUnitCosts', 'CostAccountant', 'CFO', 'Manufacturing', 'Finance'],
      ['projectTotalVariableCosts', 'FinancialPlanningAnalyst', 'CFO', 'SalesOperations', 'VP Sales'],
    ],
    relatedProcesses: [
      ['3.4.4.2 Calculate product revenue', 'Upstream - revenue projections provide volume assumptions'],
      ['3.4.4.4 Determine overhead and fixed costs', 'Parallel - both feed into net profit calculation'],
      ['3.4.4.5 Calculate net profit', 'Downstream - variable costs subtracted from revenue'],
    ],
    relatedDepartments: [
      ['Finance', 'Calculates and validates variable cost projections'],
      ['Operations', 'Provides manufacturing and delivery cost data'],
      ['Procurement', 'Supplies raw material and component pricing'],
      ['Sales', 'Contributes commission and incentive cost data'],
    ],
    relatedOccupations: [
      ['Financial Planning Analyst', 'Projects total variable costs'],
      ['Cost Accountant', 'Calculates per-unit variable costs'],
      ['Procurement Analyst', 'Provides material cost inputs'],
    ],
    kpis: [
      ['Variable Cost Per Unit', 'Average variable cost per unit produced or sold', 'USD'],
      ['Variable Cost Ratio', 'Variable costs as percentage of revenue', '%'],
      ['Cost Projection Accuracy', 'Variance between projected and actual variable costs', '%'],
    ],
    usage: `import { determineVariableCosts } from '@headlessly/determine-variable-costs'

const costs = determineVariableCosts()

// Calculate per-unit costs
const unitCosts = await costs.calculatePerUnitCosts({
  products: ['platform-standard', 'platform-enterprise'],
  components: ['hosting', 'support', 'commissions', 'payment-processing']
})

// Project total variable costs
const projection = await costs.projectTotalVariableCosts({
  costModel: unitCosts.id,
  forecastedVolumes: { 'platform-standard': 10000, 'platform-enterprise': 2000 }
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/10145-DetermineOverheadAndFixedCosts.mdx': {
    description: 'Business-as-Code definition for overhead and fixed cost determination. Models the identification and calculation of costs that remain constant regardless of sales volume, including facilities, salaries, and equipment.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Determine overhead and fixed costs]
    B --> C[Identify fixed cost categories]
    B --> D[Calculate overhead rates]
    B --> E[Allocate to products]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'CostAccountant', result: 'OverheadFixedCostProjection' },
    actions: [
      ['identifyFixedCostCategories', 'Catalog all costs that do not vary with production or sales volume'],
      ['calculateOverheadRates', 'Determine overhead allocation rates for facilities, equipment, and admin'],
      ['allocateCostsToProducts', 'Distribute fixed and overhead costs across product lines using allocation basis'],
      ['projectAnnualFixedCosts', 'Estimate total fixed costs for the budget period'],
    ],
    events: [
      ['fixedCostCategoriesIdentified', 'Fixed cost elements cataloged and classified'],
      ['overheadRatesCalculated', 'Overhead allocation rates computed'],
      ['costsAllocatedToProducts', 'Fixed costs distributed across product lines'],
      ['annualFixedCostsProjected', 'Total fixed cost projections completed for budget period'],
    ],
    searches: [
      ['getFixedCosts', 'Retrieve fixed cost data by category or department'],
      ['getOverheadRates', 'Access overhead allocation rates by cost center'],
      ['getCostAllocations', 'Query how fixed costs are distributed across products'],
    ],
    processFlow: `graph TD
    A[identifyFixedCostCategories] --> B[calculateOverheadRates]
    B --> C[allocateCostsToProducts]
    C --> D[projectAnnualFixedCosts]
    D --> E{Budget Aligned?}
    E -->|Yes| F[Approve Fixed Cost Budget]
    E -->|No| G[Identify Cost Reduction Opportunities]
    G --> A`,
    raci: [
      ['identifyFixedCostCategories', 'CostAccountant', 'CFO', 'Operations', 'HR'],
      ['calculateOverheadRates', 'CostAccountant', 'CFO', 'Finance', 'Facilities'],
      ['projectAnnualFixedCosts', 'FinancialPlanningAnalyst', 'CFO', 'VP Sales', 'ExecutiveTeam'],
    ],
    relatedProcesses: [
      ['3.4.4.3 Determine variable costs', 'Parallel - both feed into net profit calculation'],
      ['3.4.4.5 Calculate net profit', 'Downstream - fixed costs subtracted from gross profit'],
      ['3.4.4.6 Create budget', 'Downstream - fixed costs incorporated into sales budget'],
    ],
    relatedDepartments: [
      ['Finance', 'Manages fixed cost accounting and projections'],
      ['Facilities', 'Provides facility and infrastructure cost data'],
      ['HR', 'Supplies salary and benefits cost information'],
      ['IT', 'Contributes technology infrastructure cost data'],
    ],
    relatedOccupations: [
      ['Cost Accountant', 'Classifies and calculates overhead costs'],
      ['Financial Planning Analyst', 'Projects total fixed costs for budgeting'],
      ['Controller', 'Validates cost allocations and overhead rates'],
    ],
    kpis: [
      ['Fixed Cost Ratio', 'Fixed costs as percentage of total revenue', '%'],
      ['Overhead Rate', 'Overhead costs per unit of allocation basis', 'USD'],
      ['Fixed Cost Projection Accuracy', 'Variance between projected and actual fixed costs', '%'],
    ],
    usage: `import { determineOverheadAndFixedCosts } from '@headlessly/determine-overhead-and-fixed-costs'

const overhead = determineOverheadAndFixedCosts()

// Identify fixed cost categories
const categories = await overhead.identifyFixedCostCategories({
  departments: ['sales', 'marketing', 'operations'],
  includeDepreciation: true
})

// Project annual fixed costs
const fixedCosts = await overhead.projectAnnualFixedCosts({
  categories: categories.map(c => c.id),
  period: 'fiscal-year-2026',
  adjustForInflation: true
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/10146-CalculateNetProfit.mdx': {
    description: 'Business-as-Code definition for net profit calculation. Models the determination of organizational profitability by subtracting variable costs, fixed costs, and overhead from total revenue.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Calculate net profit]
    B --> C[Aggregate revenue]
    B --> D[Subtract all costs]
    B --> E[Compute net margin]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'FinancialPlanningAnalyst', result: 'NetProfitProjection' },
    actions: [
      ['aggregateRevenue', 'Consolidate total revenue projections across all products and channels'],
      ['subtractVariableCosts', 'Deduct projected variable costs from total revenue to get gross profit'],
      ['subtractFixedCosts', 'Deduct overhead and fixed costs from gross profit'],
      ['computeNetMargin', 'Calculate net profit margin as percentage of revenue'],
      ['analyzeScenarios', 'Model best-case, worst-case, and baseline net profit scenarios'],
    ],
    events: [
      ['revenueAggregated', 'Total revenue projections consolidated'],
      ['variableCostsSubtracted', 'Gross profit calculated after variable cost deduction'],
      ['fixedCostsSubtracted', 'Net profit calculated after all cost deductions'],
      ['netMarginComputed', 'Net profit margin percentage determined'],
      ['scenariosAnalyzed', 'Multiple profit scenarios modeled and compared'],
    ],
    searches: [
      ['getNetProfit', 'Retrieve net profit projections by product or period'],
      ['getNetMargin', 'Access net profit margin data by product or segment'],
      ['getProfitScenarios', 'Query scenario analysis results for profit projections'],
    ],
    processFlow: `graph TD
    A[aggregateRevenue] --> B[subtractVariableCosts]
    B --> C[subtractFixedCosts]
    C --> D[computeNetMargin]
    D --> E[analyzeScenarios]
    E --> F{Margin Target Met?}
    F -->|Yes| G[Approve Profit Projection]
    F -->|No| H[Identify Margin Improvement Levers]
    H --> A`,
    raci: [
      ['aggregateRevenue', 'FinancialPlanningAnalyst', 'CFO', 'SalesOperations', 'VP Sales'],
      ['subtractVariableCosts', 'FinancialPlanningAnalyst', 'CFO', 'CostAccountant', 'Operations'],
      ['computeNetMargin', 'FinancialPlanningAnalyst', 'CFO', 'VP Sales', 'ExecutiveTeam'],
    ],
    relatedProcesses: [
      ['3.4.4.2 Calculate product revenue', 'Upstream - revenue figures feed profit calculation'],
      ['3.4.4.3 Determine variable costs', 'Upstream - variable cost data for deduction'],
      ['3.4.4.4 Determine overhead and fixed costs', 'Upstream - fixed cost data for deduction'],
      ['3.4.4.6 Create budget', 'Downstream - profit targets inform budget creation'],
    ],
    relatedDepartments: [
      ['Finance', 'Owns net profit calculation and projections'],
      ['Sales Operations', 'Provides revenue and volume inputs'],
      ['Operations', 'Supplies cost data for profit computation'],
      ['Executive Leadership', 'Reviews and approves profit targets'],
    ],
    relatedOccupations: [
      ['Financial Planning Analyst', 'Calculates and projects net profit'],
      ['Controller', 'Validates profit calculations and assumptions'],
      ['CFO', 'Approves net profit targets and scenarios'],
    ],
    kpis: [
      ['Net Profit Margin', 'Net profit as percentage of total revenue', '%'],
      ['Gross Profit Margin', 'Revenue minus variable costs as percentage of revenue', '%'],
      ['Profit Projection Accuracy', 'Variance between projected and actual net profit', '%'],
    ],
    usage: `import { calculateNetProfit } from '@headlessly/calculate-net-profit'

const profit = calculateNetProfit()

// Compute net profit projection
const netProfit = await profit.computeNetMargin({
  revenueProjection: 25000000,
  variableCosts: 10000000,
  fixedCosts: 8000000
})

// Analyze scenarios
const scenarios = await profit.analyzeScenarios({
  scenarios: ['optimistic', 'baseline', 'conservative'],
  revenueVariance: 0.15,
  costVariance: 0.10
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/10147-CreateBudget.mdx': {
    description: 'Business-as-Code definition for sales budget creation. Models the development of a financial plan allocating capital, personnel, and resources needed to achieve sales targets.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Create budget]
    B --> C[Compile revenue targets]
    B --> D[Allocate resources]
    B --> E[Approve and publish budget]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'SalesOperationsManager', result: 'SalesBudget' },
    actions: [
      ['compileRevenuTargets', 'Bring together revenue, cost, and profit projections into a unified plan'],
      ['allocateCapitalResources', 'Distribute budget across headcount, tools, travel, and programs'],
      ['setDepartmentalBudgets', 'Assign budget allocations to sales regions, teams, and support functions'],
      ['conductBudgetReview', 'Present budget to leadership for review and adjustment'],
      ['publishApprovedBudget', 'Finalize and distribute the approved sales budget to all stakeholders'],
    ],
    events: [
      ['revenueTargetsCompiled', 'Revenue and cost projections consolidated into budget framework'],
      ['capitalResourcesAllocated', 'Budget distributed across resource categories'],
      ['departmentalBudgetsSet', 'Regional and team-level budgets assigned'],
      ['budgetReviewConducted', 'Budget reviewed and adjusted by leadership'],
      ['approvedBudgetPublished', 'Final budget approved and distributed'],
    ],
    searches: [
      ['getSalesBudget', 'Retrieve the approved sales budget by region or team'],
      ['getBudgetAllocations', 'Access budget distribution across resource categories'],
      ['getBudgetVsActual', 'Compare budget allocations against actual spend'],
    ],
    processFlow: `graph TD
    A[compileRevenuTargets] --> B[allocateCapitalResources]
    B --> C[setDepartmentalBudgets]
    C --> D[conductBudgetReview]
    D --> E{Budget Approved?}
    E -->|Yes| F[publishApprovedBudget]
    E -->|No| G[Adjust Allocations]
    G --> B`,
    raci: [
      ['compileRevenuTargets', 'SalesOperationsManager', 'VP Sales', 'Finance', 'SalesForecastAnalyst'],
      ['allocateCapitalResources', 'SalesOperationsManager', 'VP Sales', 'CFO', 'HR'],
      ['publishApprovedBudget', 'SalesOperationsManager', 'CFO', 'VP Sales', 'AllSalesTeams'],
    ],
    relatedProcesses: [
      ['3.4.4.5 Calculate net profit', 'Upstream - profit projections inform budget constraints'],
      ['3.4.4.7 Allocate marketing budget', 'Downstream - marketing budget carved from overall sales budget'],
      ['3.4.5 Establish sales goals and measures', 'Downstream - budget constraints inform goal setting'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Manages budget creation process'],
      ['Finance', 'Validates budget assumptions and approves allocations'],
      ['HR', 'Provides headcount and compensation cost inputs'],
      ['Executive Leadership', 'Reviews and approves final budget'],
    ],
    relatedOccupations: [
      ['Sales Operations Manager', 'Leads the sales budget creation process'],
      ['Financial Planning Analyst', 'Models budget scenarios and allocations'],
      ['VP Sales', 'Approves final budget and resource allocations'],
    ],
    kpis: [
      ['Budget Variance', 'Actual spend vs. budgeted amount', '%'],
      ['Budget Cycle Time', 'Time from budget initiation to approval', 'Days'],
      ['Revenue Per Budget Dollar', 'Revenue generated per dollar of sales budget', 'Ratio'],
    ],
    usage: `import { createBudget } from '@headlessly/create-budget'

const budget = createBudget()

// Allocate resources across categories
const allocations = await budget.allocateCapitalResources({
  totalBudget: 5000000,
  categories: {
    headcount: 0.55,
    tools: 0.15,
    travel: 0.10,
    events: 0.10,
    programs: 0.10
  }
})

// Set departmental budgets
const deptBudgets = await budget.setDepartmentalBudgets({
  regions: {
    'north-america': 2500000,
    'europe': 1500000,
    'asia-pacific': 1000000
  }
})`,
  },

  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/11463-AllocateMarketingBudget.mdx': {
    description: 'Business-as-Code definition for marketing budget allocation. Models the distribution of marketing funds across channels, programs, and campaigns to support sales targets.',
    overview: 'Distributing the marketing budget across advertising channels, demand generation programs, trade marketing activities, and brand building campaigns. Align investment with sales priorities, evaluate channel ROI, and ensure spending supports customer acquisition and revenue growth targets.',
    hierarchy: `graph TD
    A[Establish overall sales budgets] --> B[Allocate marketing budget]
    B --> C[Evaluate channel ROI]
    B --> D[Distribute across programs]
    B --> E[Approve allocations]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'MarketingDirector', result: 'MarketingBudgetAllocation' },
    actions: [
      ['evaluateChannelROI', 'Assess return on investment across marketing channels and programs'],
      ['distributeAcrossPrograms', 'Allocate budget to demand generation, brand, content, and trade marketing'],
      ['alignWithSalesPriorities', 'Ensure marketing spend supports key sales growth objectives'],
      ['approveMarketingAllocations', 'Obtain leadership approval for marketing budget distribution'],
    ],
    events: [
      ['channelROIEvaluated', 'Marketing channel ROI analysis completed'],
      ['budgetDistributed', 'Marketing funds allocated across programs and channels'],
      ['salesPrioritiesAligned', 'Marketing investment validated against sales objectives'],
      ['marketingAllocationsApproved', 'Marketing budget distribution approved by leadership'],
    ],
    searches: [
      ['getMarketingBudget', 'Retrieve marketing budget allocation by program or channel'],
      ['getChannelROI', 'Access ROI metrics for marketing channels'],
      ['getMarketingSpend', 'Query marketing spend against approved budget'],
    ],
    processFlow: `graph TD
    A[evaluateChannelROI] --> B[alignWithSalesPriorities]
    B --> C[distributeAcrossPrograms]
    C --> D[approveMarketingAllocations]
    D --> E{Approved?}
    E -->|Yes| F[Execute Marketing Plan]
    E -->|No| G[Rebalance Allocations]
    G --> C`,
    raci: [
      ['evaluateChannelROI', 'MarketingAnalyst', 'MarketingDirector', 'Finance', 'Sales'],
      ['distributeAcrossPrograms', 'MarketingDirector', 'VP Marketing', 'Finance', 'VP Sales'],
      ['approveMarketingAllocations', 'VP Marketing', 'CFO', 'VP Sales', 'ExecutiveTeam'],
    ],
    relatedProcesses: [
      ['3.4.4.6 Create budget', 'Upstream - overall sales budget carves out marketing allocation'],
      ['3.3 Develop and manage marketing plans', 'Downstream - budget allocation funds marketing plan execution'],
      ['3.4.2.6 Define trade programs and funding options', 'Parallel - trade marketing budget feeds program funding'],
    ],
    relatedDepartments: [
      ['Marketing', 'Owns marketing budget allocation and execution'],
      ['Finance', 'Approves budget levels and tracks spend'],
      ['Sales', 'Validates alignment with sales growth priorities'],
      ['Executive Leadership', 'Reviews and approves final allocations'],
    ],
    relatedOccupations: [
      ['Marketing Director', 'Leads marketing budget allocation decisions'],
      ['Marketing Analyst', 'Evaluates channel ROI and spending effectiveness'],
      ['Financial Planning Analyst', 'Models budget scenarios and tracks spend'],
    ],
    kpis: [
      ['Marketing ROI', 'Revenue generated per dollar of marketing spend', 'Ratio'],
      ['Budget Utilization', 'Percentage of allocated marketing budget spent', '%'],
      ['Cost Per Lead', 'Marketing cost to generate a qualified lead', 'USD'],
    ],
    usage: `import { allocateMarketingBudget } from '@headlessly/allocate-marketing-budget'

const marketingBudget = allocateMarketingBudget()

// Evaluate channel performance
const roi = await marketingBudget.evaluateChannelROI({
  channels: ['digital-ads', 'content', 'events', 'trade-marketing'],
  period: 'last-fiscal-year'
})

// Distribute budget across programs
const allocation = await marketingBudget.distributeAcrossPrograms({
  totalBudget: 2000000,
  programs: {
    'demand-generation': 0.35,
    'brand-awareness': 0.20,
    'trade-marketing': 0.25,
    'content-marketing': 0.15,
    'events': 0.05
  }
})`,
  },

  // === 3.4.5 ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.5-EstablishSalesGoalsAndMeasures/10132-EstablishSalesGoalsAndMeasures.mdx': {
    description: 'Business-as-Code definition for sales goal and measure establishment. Models the creation of quantitative targets, quota assignments, and performance metrics to track sales team progress toward revenue objectives.',
    hierarchy: `graph TD
    A[Develop trade customer sales strategy] --> B[Establish sales goals and measures]
    B --> C[Set revenue quotas]
    B --> D[Define performance metrics]
    B --> E[Communicate goals to teams]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'SalesOperationsManager', result: 'SalesGoalsAndMetrics' },
    actions: [
      ['setRevenueQuotas', 'Establish territory, team, and individual sales quotas based on forecasts'],
      ['definePerformanceMetrics', 'Select KPIs to measure progress toward sales targets'],
      ['assignQuotas', 'Distribute quotas to sales regions, teams, and individual representatives'],
      ['establishIncentiveThresholds', 'Set performance thresholds that trigger compensation and bonus payouts'],
      ['communicateGoals', 'Present approved goals, quotas, and metrics to sales organization'],
    ],
    events: [
      ['revenueQuotasSet', 'Sales quotas established for all territories and individuals'],
      ['performanceMetricsDefined', 'Sales KPIs selected and documented'],
      ['quotasAssigned', 'Quotas distributed to teams and individuals'],
      ['incentiveThresholdsEstablished', 'Compensation thresholds tied to performance levels'],
      ['goalsCommunicated', 'Sales goals and metrics published to the organization'],
    ],
    searches: [
      ['getSalesQuotas', 'Retrieve quota assignments by territory, team, or individual'],
      ['getPerformanceMetrics', 'Access defined sales performance metrics and targets'],
      ['getGoalProgress', 'Track actual performance against established goals'],
    ],
    processFlow: `graph TD
    A[setRevenueQuotas] --> B[definePerformanceMetrics]
    B --> C[assignQuotas]
    C --> D[establishIncentiveThresholds]
    D --> E[communicateGoals]
    E --> F{Goals Accepted?}
    F -->|Yes| G[Begin Tracking]
    F -->|No| H[Negotiate Adjustments]
    H --> C`,
    raci: [
      ['setRevenueQuotas', 'SalesOperationsManager', 'VP Sales', 'Finance', 'HR'],
      ['definePerformanceMetrics', 'SalesOperationsManager', 'VP Sales', 'Strategy', 'Marketing'],
      ['assignQuotas', 'SalesDirector', 'VP Sales', 'SalesOperations', 'HR'],
      ['communicateGoals', 'VP Sales', 'CRO', 'HR', 'AllSalesTeams'],
    ],
    relatedProcesses: [
      ['3.4.4 Establish overall sales budgets', 'Upstream - budget constraints inform goal setting'],
      ['3.4.1 Develop sales forecast', 'Upstream - forecast provides basis for quota calculation'],
      ['3.4.7 Establish customer management measures', 'Parallel - customer metrics complement sales goals'],
      ['3.5.1 Manage leads/opportunities', 'Downstream - goals drive pipeline management priorities'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Designs quotas and performance metrics'],
      ['Sales', 'Receives and works toward assigned goals'],
      ['HR', 'Aligns compensation plans with sales targets'],
      ['Finance', 'Validates quota feasibility against budget'],
    ],
    relatedOccupations: [
      ['Sales Operations Manager', 'Designs sales goals and measurement framework'],
      ['Sales Director', 'Assigns quotas and manages team performance'],
      ['Compensation Analyst', 'Links incentive plans to sales metrics'],
    ],
    kpis: [
      ['Quota Attainment', 'Percentage of sales reps achieving their quota', '%'],
      ['Goal Coverage Ratio', 'Total quota assigned vs. revenue target', 'Ratio'],
      ['Incentive Plan Effectiveness', 'Correlation between incentives and performance improvement', 'Score (1-10)'],
    ],
    usage: `import { establishSalesGoalsAndMeasures } from '@headlessly/establish-sales-goals-and-measures'

const goals = establishSalesGoalsAndMeasures()

// Set revenue quotas
const quotas = await goals.setRevenueQuotas({
  totalTarget: 25000000,
  allocationMethod: 'territory-potential-weighted',
  period: 'fiscal-year-2026'
})

// Assign quotas to teams
const assignments = await goals.assignQuotas({
  quotaModel: quotas.id,
  teams: ['north-team', 'south-team', 'west-team', 'east-team']
})`,
  },

  // === 3.4.6 ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.6-EstablishCustomerManagementGoalsAndStrategies/11464-DevelopCustomerBusinessPlan.mdx': {
    description: 'Business-as-Code definition for customer business plan development. Models the creation of account-level business plans that define growth strategies, investment priorities, and mutual objectives for major customer accounts.',
    overview: 'Creating comprehensive business plans for major customer accounts that outline mutual growth objectives, investment commitments, and joint go-to-market strategies. Analyze customer potential, define account-level revenue targets, identify expansion opportunities, and establish governance structures for the customer relationship.',
    hierarchy: `graph TD
    A[Establish customer management goals, and strategies] --> B[Develop customer business plan]
    B --> C[Analyze account potential]
    B --> D[Define growth objectives]
    B --> E[Establish joint governance]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'KeyAccountManager', result: 'CustomerBusinessPlan' },
    actions: [
      ['analyzeAccountPotential', 'Assess customer size, growth trajectory, and whitespace opportunities'],
      ['defineGrowthObjectives', 'Set mutual revenue, share, and expansion targets for the account'],
      ['identifyExpansionOpportunities', 'Map cross-sell, upsell, and new product opportunities at the account'],
      ['establishJointGovernance', 'Define executive sponsorship, review cadence, and escalation processes'],
      ['documentBusinessPlan', 'Compile the customer business plan with timelines and milestones'],
    ],
    events: [
      ['accountPotentialAnalyzed', 'Customer account assessment completed'],
      ['growthObjectivesDefined', 'Mutual revenue and growth targets agreed'],
      ['expansionOpportunitiesIdentified', 'Cross-sell and upsell opportunities mapped'],
      ['jointGovernanceEstablished', 'Executive sponsorship and review cadence confirmed'],
      ['businessPlanDocumented', 'Formal customer business plan completed and distributed'],
    ],
    searches: [
      ['getCustomerBusinessPlan', 'Retrieve the business plan for a specific customer account'],
      ['getAccountPotential', 'Access account sizing and whitespace analysis data'],
      ['getExpansionOpportunities', 'List identified expansion opportunities by account'],
    ],
    processFlow: `graph TD
    A[analyzeAccountPotential] --> B[defineGrowthObjectives]
    B --> C[identifyExpansionOpportunities]
    C --> D[establishJointGovernance]
    D --> E[documentBusinessPlan]
    E --> F{Plan Approved?}
    F -->|Yes| G[Execute Account Plan]
    F -->|No| H[Revise Objectives]
    H --> B`,
    raci: [
      ['analyzeAccountPotential', 'KeyAccountManager', 'SalesDirector', 'Finance', 'Marketing'],
      ['defineGrowthObjectives', 'KeyAccountManager', 'VP Sales', 'Finance', 'Strategy'],
      ['documentBusinessPlan', 'KeyAccountManager', 'SalesDirector', 'SalesOperations', 'VP Sales'],
    ],
    relatedProcesses: [
      ['3.4.6 Establish customer management goals and strategies', 'Parent - business plans implement customer management strategy'],
      ['3.5.2 Manage customers and accounts', 'Downstream - business plan guides account management'],
      ['3.4.2.15 Create strategic and tactical sales plans by customer', 'Parallel - customer sales plans align with business plans'],
    ],
    relatedDepartments: [
      ['Sales', 'Creates and executes customer business plans'],
      ['Finance', 'Validates revenue targets and investment levels'],
      ['Strategy', 'Ensures alignment with corporate growth priorities'],
      ['Customer Success', 'Supports retention and expansion objectives'],
    ],
    relatedOccupations: [
      ['Key Account Manager', 'Authors and manages customer business plans'],
      ['Sales Director', 'Reviews and approves account-level plans'],
      ['Customer Success Manager', 'Supports retention goals within the plan'],
    ],
    kpis: [
      ['Plan Coverage', 'Percentage of top accounts with documented business plans', '%'],
      ['Account Growth Rate', 'Year-over-year revenue growth at planned accounts', '%'],
      ['Expansion Revenue', 'Revenue from cross-sell and upsell at planned accounts', 'USD'],
    ],
    usage: `import { developCustomerBusinessPlan } from '@headlessly/develop-customer-business-plan'

const businessPlan = developCustomerBusinessPlan()

// Analyze account potential
const potential = await businessPlan.analyzeAccountPotential({
  customerId: 'enterprise-customer-a',
  dimensions: ['wallet-share', 'whitespace', 'competitive-landscape']
})

// Define growth objectives
const objectives = await businessPlan.defineGrowthObjectives({
  customerId: 'enterprise-customer-a',
  revenueTarget: 5000000,
  expansionTarget: 0.25,
  horizon: '3-years'
})`,
  },

  // === 3.4.7 ===
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.7-EstablishCustomerManagementMeasures/10133-EstablishCustomerManagementMeasures.mdx': {
    description: 'Business-as-Code definition for customer management measure establishment. Models the selection and implementation of metrics that track customer activity, satisfaction, responsiveness, and account health across the customer base.',
    hierarchy: `graph TD
    A[Develop trade customer sales strategy] --> B[Establish customer management measures]
    B --> C[Select customer metrics]
    B --> D[Set measurement targets]
    B --> E[Deploy tracking systems]
    style B fill:#f9f,stroke:#333`,
    graphdl: { actor: 'SalesOperationsManager', result: 'CustomerManagementMeasurementFramework' },
    actions: [
      ['selectCustomerMetrics', 'Choose KPIs that track customer satisfaction, retention, and account health'],
      ['setMeasurementTargets', 'Establish target levels for each selected customer management metric'],
      ['designTrackingSystems', 'Configure CRM and analytics to capture and report customer measures'],
      ['deployMeasurementDashboards', 'Publish dashboards that visualize customer management performance'],
      ['reviewAndRefineMetrics', 'Periodically evaluate metric relevance and adjust as needed'],
    ],
    events: [
      ['customerMetricsSelected', 'Customer management KPIs chosen and documented'],
      ['measurementTargetsSet', 'Target levels established for all customer metrics'],
      ['trackingSystemsDesigned', 'CRM and analytics configured for customer measurement'],
      ['dashboardsDeployed', 'Customer management dashboards published'],
      ['metricsReviewCompleted', 'Periodic review of metric relevance and effectiveness completed'],
    ],
    searches: [
      ['getCustomerMetrics', 'Retrieve customer management metrics and current values'],
      ['getMeasurementTargets', 'Access target levels for customer management KPIs'],
      ['getCustomerDashboard', 'Query customer management dashboard data'],
    ],
    processFlow: `graph TD
    A[selectCustomerMetrics] --> B[setMeasurementTargets]
    B --> C[designTrackingSystems]
    C --> D[deployMeasurementDashboards]
    D --> E[reviewAndRefineMetrics]
    E --> F{Metrics Effective?}
    F -->|Yes| G[Continue Tracking]
    F -->|No| H[Revise Metric Selection]
    H --> A`,
    raci: [
      ['selectCustomerMetrics', 'SalesOperationsManager', 'VP Sales', 'CustomerSuccess', 'Marketing'],
      ['setMeasurementTargets', 'SalesOperationsManager', 'VP Sales', 'Finance', 'Strategy'],
      ['deployMeasurementDashboards', 'SalesOperationsManager', 'VP Sales', 'IT', 'AllSalesTeams'],
    ],
    relatedProcesses: [
      ['3.4.5 Establish sales goals and measures', 'Parallel - sales goals complement customer management metrics'],
      ['3.4.6 Establish customer management goals, and strategies', 'Upstream - strategy defines what to measure'],
      ['3.5.2 Manage customers and accounts', 'Downstream - measures track account management effectiveness'],
    ],
    relatedDepartments: [
      ['Sales Operations', 'Designs and manages customer measurement framework'],
      ['Customer Success', 'Provides customer satisfaction and retention data'],
      ['IT', 'Implements tracking systems and dashboards'],
      ['Marketing', 'Contributes customer engagement metrics'],
    ],
    relatedOccupations: [
      ['Sales Operations Manager', 'Designs customer management measurement framework'],
      ['Business Intelligence Analyst', 'Builds customer management dashboards'],
      ['Customer Success Manager', 'Provides input on customer health metrics'],
    ],
    kpis: [
      ['Customer Satisfaction Score', 'Overall customer satisfaction rating', 'Score (1-10)'],
      ['Customer Retention Rate', 'Percentage of customers retained period over period', '%'],
      ['Net Promoter Score', 'Customer likelihood to recommend the organization', 'NPS (-100 to 100)'],
      ['Account Health Score', 'Composite measure of account engagement and risk', 'Score (1-100)'],
    ],
    usage: `import { establishCustomerManagementMeasures } from '@headlessly/establish-customer-management-measures'

const measures = establishCustomerManagementMeasures()

// Select customer metrics
const metrics = await measures.selectCustomerMetrics({
  categories: ['satisfaction', 'retention', 'engagement', 'account-health'],
  customerSegments: ['enterprise', 'mid-market', 'smb']
})

// Deploy measurement dashboards
const dashboard = await measures.deployMeasurementDashboards({
  metrics: metrics.map(m => m.id),
  audiences: ['sales-leadership', 'account-managers', 'customer-success']
})`,
  },
}

// Remaining index files with just Sub-Process TODO descriptions
const indexFixes: Record<string, [string, string][]> = {
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.3-PerformCategoryManagement/index.mdx': [],
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.4-EstablishOverallSalesBudgets/index.mdx': [],
  '3.4-DevelopTradeCustomerSalesStrategy/3.4.6-EstablishCustomerManagementGoalsAndStrategies/index.mdx': [],
}

async function curateFile(relPath: string, data: CuratedData) {
  const fullPath = `${ROOT}/${relPath}`
  if (!existsSync(fullPath)) {
    console.log(`SKIP (not found): ${relPath}`)
    return
  }

  let content = await readFile(fullPath, 'utf-8')

  // Replace the description line
  content = content.replace(
    /^> TODO: Business-as-Code definition for .+$/m,
    `> ${data.description}`
  )

  // Replace overview if needed
  if (data.overview) {
    content = content.replace('TODO: Add process overview', data.overview)
  }

  // Replace process hierarchy
  content = content.replace(
    /```mermaid\ngraph TD\n    A\[.+?\]\n    A --> B\[TODO\]\n```/s,
    `\`\`\`mermaid\n${data.hierarchy}\n\`\`\``
  )

  // Replace GraphDL
  content = content.replace(
    /  actor: TODO\n  result: TODO/,
    `  actor: ${data.graphdl.actor}\n  result: ${data.graphdl.result}`
  )

  // Replace Actions
  const actionsTable = data.actions.map(([a, d]) => `| ${a} | ${d} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## Events',
    `${actionsTable}\n\n## Events`
  )

  // Replace Events
  const eventsTable = data.events.map(([e, d]) => `| ${e} | ${d} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## Searches',
    `${eventsTable}\n\n## Searches`
  )

  // Replace Searches
  const searchesTable = data.searches.map(([s, d]) => `| ${s} | ${d} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## Process Flow',
    `${searchesTable}\n\n## Process Flow`
  )

  // Replace Process Flow
  content = content.replace(
    /```mermaid\ngraph TD\n    A\[TODO\] --> B\[TODO\]\n```/,
    `\`\`\`mermaid\n${data.processFlow}\n\`\`\``
  )

  // Replace RACI Matrix
  const raciTable = data.raci.map(([a, r, ac, c, i]) => `| ${a} | ${r} | ${ac} | ${c} | ${i} |`).join('\n')
  content = content.replace(
    '| TODO | TODO | TODO | TODO | TODO |\n\n## Related Processes',
    `${raciTable}\n\n## Related Processes`
  )

  // Replace Related Processes
  const relProcesses = data.relatedProcesses.map(([p, r]) => `| ${p} | ${r} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## Related Departments',
    `${relProcesses}\n\n## Related Departments`
  )

  // Replace Related Departments
  const relDepts = data.relatedDepartments.map(([d, r]) => `| ${d} | ${r} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## Related Occupations',
    `${relDepts}\n\n## Related Occupations`
  )

  // Replace Related Occupations
  const relOccs = data.relatedOccupations.map(([o, i]) => `| ${o} | ${i} |`).join('\n')
  content = content.replace(
    '| TODO | TODO |\n\n## KPIs',
    `${relOccs}\n\n## KPIs`
  )

  // Replace KPIs
  const kpisTable = data.kpis.map(([k, d, u]) => `| ${k} | ${d} | ${u} |`).join('\n')
  content = content.replace(
    '| TODO | TODO | TODO |\n\n## Usage',
    `${kpisTable}\n\n## Usage`
  )

  // Replace Usage
  content = content.replace(
    /```typescript\nimport \{ TODO \} from '@headlessly\/.+?'\n\nconst client = TODO\(\)\n\n\/\/ TODO: Example action calls\n```/s,
    `\`\`\`typescript\n${data.usage}\n\`\`\``
  )

  await writeFile(fullPath, content, 'utf-8')
  console.log(`DONE: ${relPath}`)
}

async function main() {
  for (const [path, data] of Object.entries(files)) {
    await curateFile(path, data)
  }
  console.log('\nAll 3.4 remaining files curated!')
}

main().catch(console.error)
