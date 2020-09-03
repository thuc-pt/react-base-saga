import AdminPage from '../containers/AdminPage';
import TaskBoard from '../containers/TaskBoard';

export const API_DOMAIN = 'http://localhost:3000/';

export const statusTitles = [
  {value: "0", name: "READY"},
  {value: "1", name: "IN PROGRESS"},
  {value: "2", name: "COMPLETE"}
];

export const statusCode = {
  success: 200,
  created: 201,
  updated: 202
};

export const ADMIN_ROUTES = [
  {
    path: '/',
    name: "Admin Page",
    exact: true,
    component: AdminPage
  },
  {
    path: '/task-board',
    name: "Task Management",
    exact: true,
    component: TaskBoard
  }
];
