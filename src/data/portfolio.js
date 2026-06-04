// Centralized portfolio content.
// Edit this file when you want to update text, skills, experience cards, links, or stats.

export const services = [
  {
    // Matches the icon key in ServiceIcon.jsx.
    icon: 'code',
    title: 'Systems Development',
    detail: 'Building and maintaining in-house systems, fixing bugs, and improving workflows for real users.',
  },
  {
    icon: 'document',
    title: 'Requirements & Documentation',
    detail: 'Gathering data and preparing functional and business requirement documents such as FRD and BRD.',
  },
  {
    icon: 'support',
    title: 'QA & Web Support',
    detail: 'Testing system behavior, checking issues, supporting website updates, email tasks, and social posting.',
  },
]

export const stats = [
  // value is animated by AnimatedStat.jsx; suffix is shown beside the number.
  { value: '2023', suffix: '', label: 'College graduate' },
  { value: '2', suffix: '+', label: 'Years professional experience' },
  { value: '2026', suffix: '', label: 'CSE passer' },
]

export const resumeItems = [
  {
    // preview controls which abstract visual ProjectPreview.jsx displays.
    preview: 'inventory',
    title: 'ICT Inventory System',
    description: 'Developed an in-house inventory system for staff use, supporting asset tracking workflows, internal records, and operational inventory processes.',
    stack: ['Django REST Framework', 'API Integration', 'Database Management'],
  },
  {
    preview: 'procurement',
    title: 'ERP Procurement Enhancements',
    description: 'Enhanced internal ERP procurement workflows by adding and improving modules for purchase requests, certificate availability of funds, approved budget for contract, and annual procurement planning.',
    stack: ['Django REST Framework', 'API Integration', 'Database Management', 'System Enhancement'],
  },
  {
    preview: 'website',
    title: 'BCC Rail Ltd',
    description: 'Supports the UK-based company through website development, email handling, course updates, group announcements, and social media posting.',
    stack: ['Website Management', 'Next.js', 'WordPress', 'Admin Support', 'Social Media Support'],
    link: 'https://bccrail.co.uk/',
  },
]

export const contactLinks = {
  // Used by Navbar and ContactSection links.
  email: 'phoebeclairelanquino@gmail.com',
  github: 'https://github.com/phoebe1004',
  gitlab: 'https://gitlab.com/phoebeclairelanquino',
  linkedin: 'https://www.linkedin.com/in/phoebe-claire-lanquino-6ba876144/',
}
