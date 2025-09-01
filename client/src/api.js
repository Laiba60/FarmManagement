import axios from "axios";

const BASE_URL = "http://localhost:5000"; 

const api = axios.create({
  baseURL: BASE_URL,
});



api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const getMyMissions = async () => {
  const res = await api.get("/missions/my");
  return res.data;
};

export const createMission = async (missionData) => {
  const res = await api.post("/missions", missionData);
  return res.data;
};


export const getEngineers = async () => {
  const response = await api.get("/engineers");
  return response.data;
};

export const getBatteryStatus = async () => {
  const response = await api.get("/battery");
  return response.data; 
};

export const getChemicalLevel = async () => {
  const response = await api.get("/chemical");
  return response.data; 
};

export const getRentals = async () => {
  const res = await api.get("/rentals");
  return res.data;
};


export const rentNow = async (rentalId) => {
  const res = await api.post(`/rentals/${rentalId}/rent`); 
  return res.data;
};
// Admin APIs
// Admin APIs
export const getAdminEngineers = async () => {
  const res = await api.get("/admin/engineers");
  return res.data;
};

export const getAdminFarmers = async () => {
  const res = await api.get("/admin/farmers");
  return res.data;
};

export const getAdminRobots = async () => {
  const res = await api.get("/admin/robots");
  return res.data;
};

// ✅ New POST APIs for plus icon
export const addAdminEngineer = async (engineerData) => {
  const res = await api.post("/admin/engineers", engineerData);
  return res.data;
};

export const addAdminFarmer = async (farmerData) => {
  const res = await api.post("/admin/farmers", farmerData);
  return res.data;
};

export const addAdminRobot = async (robotData) => {
  const res = await api.post("/admin/robots", robotData);
  return res.data;
};
export const deleteAdminEngineer = async (id) => {
  const res = await api.delete(`/admin/engineers/${id}`);
  return res.data;
};

export const deleteAdminFarmer = async (id) => {
  const res = await api.delete(`/admin/farmers/${id}`);
  return res.data;
};

export const deleteAdminRobot = async (id) => {
  const res = await api.delete(`/admin/robots/${id}`);
  return res.data;
};


export default api;
