import type { LifecycleStage } from '@nirman/shared';

export const stages: LifecycleStage[] = [
  { id: 'planning', label: 'Planning', description: 'Define vision, scope, budget and timeline before work begins.', platform: 'Nirman.World', services: ['Requirement Qualification','Feasibility','Budget Planning','Timeline Planning','Project Scope','Consultation'] },
  { id: 'agreement', label: 'Agreement', description: 'Create clear scope, commercial terms and project agreements.', platform: 'Nirman Legal', services: ['Service Agreements','Contracts','Compliance','Scope Documentation','Risk Clauses','Approvals'] },
  { id: 'design', label: 'Design', description: 'Turn requirements into accurate, buildable designs and estimates.', platform: 'DreamToDesign', services: ['Architectural Design','Structural Design','BOQ & Estimation','Interior Design','3D Visualization','Engineering Consultation'] },
  { id: 'procurement', label: 'Procurement', description: 'Source materials through qualified vendors with visibility on cost and delivery.', platform: 'BuyForBuild', services: ['Vendor Matching','RFQ','Price Comparison','Purchase Support','Delivery Tracking','Material Coordination'] },
  { id: 'workforce', label: 'Workforce', description: 'Mobilize skilled workers and execution teams when the project needs them.', platform: 'PayByDay', services: ['Skilled Workforce','Team Mobilization','Attendance','Wage Visibility','Supervisor Allocation','Workforce Records'] },
  { id: 'execution', label: 'Execution', description: 'Coordinate and monitor site work, packages, milestones and issues.', platform: 'SiteInSync', services: ['Work Packages','Daily Progress','Site Updates','Issue Tracking','Milestones','Coordination'] },
  { id: 'quality', label: 'Quality & Safety', description: 'Verify SOP, inspections, quality checks and corrective actions.', platform: 'SiteInSync', services: ['Quality Checks','SOP Monitoring','Inspection Reports','Safety Reviews','Defect Tracking','Corrective Actions'] },
  { id: 'payment', label: 'Payment', description: 'Track project cost, milestone payments and financial visibility.', platform: 'NirmanPay', services: ['Budget Tracking','Milestone Payments','Vendor Payments','Worker Payouts','Payment History','Financial Visibility'] },
  { id: 'handover', label: 'Handover', description: 'Close the project with documentation, final checks and a clear handover.', platform: 'Nirman.World', services: ['Final Inspection','Snag Closure','Completion Documents','Warranty Records','Customer Sign-off','Project Archive'] }
];
