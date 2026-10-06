const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage UI",
        taskDescription: "Create modern wireframes and component layouts for the new homepage.",
        taskDate: "2026-02-15",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Build login and signup flows with JWT verification.",
        taskDate: "2026-02-18",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions workflow for automated testing and builds.",
        taskDate: "2026-02-10",
        category: "DevOps",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "REST API Documentation",
        taskDescription: "Document user and task management endpoints using Swagger / OpenAPI.",
        taskDate: "2026-02-19",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize SQL Queries",
        taskDescription: "Add proper database indexes to speed up report generation queries.",
        taskDate: "2026-02-12",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CORS Issues",
        taskDescription: "Resolve cross-origin resource sharing headers on staging microservices.",
        taskDate: "2026-02-08",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Third-party Payment Gateway Sync",
        taskDescription: "Integrate webhook events with legacy payment provider.",
        taskDate: "2026-02-05",
        category: "Integration",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Automated E2E Testing",
        taskDescription: "Write Playwright tests for critical user checkout and registration flows.",
        taskDate: "2026-02-20",
        category: "QA",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Audit",
        taskDescription: "Ensure WCAG 2.1 AA compliance across all dashboard forms and modals.",
        taskDate: "2026-02-17",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Bash Verification",
        taskDescription: "Verify sprint regression bug fixes and update Jira tickets.",
        taskDate: "2026-02-11",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Onboarding Flow",
        taskDescription: "Design interactive step-by-step onboarding walkthrough for new clients.",
        taskDate: "2026-02-21",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design System Tokens",
        taskDescription: "Export color and typography tokens to Tailwind config presets.",
        taskDate: "2026-02-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Mobile App Wireframes",
        taskDescription: "Complete high-fidelity layouts for iOS prototype revision 1.",
        taskDate: "2026-02-07",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Kubernetes Cluster Scaling",
        taskDescription: "Configure Horizontal Pod Autoscalers (HPA) for production pods.",
        taskDate: "2026-02-22",
        category: "DevOps",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SSL Certificate Renewal",
        taskDescription: "Set up automated Certbot renewal with Cloudflare DNS integration.",
        taskDate: "2026-02-23",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Docker Image Size Optimization",
        taskDescription: "Multi-stage builds implementation reducing image sizes by 60%.",
        taskDate: "2026-02-13",
        category: "DevOps",
      },
    ],
  },
]

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
]

/**
 * Initializes localStorage with default seed data if keys don't already exist.
 */
export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}

/**
 * Retrieves and parses employees and admin records from localStorage.
 * @returns {{ employees: Array|null, admin: Array|null }}
 */
export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem('employees'))
  const adminData = JSON.parse(localStorage.getItem('admin'))

  return {
    employees: employeesData,
    admin: adminData,
  }
}
