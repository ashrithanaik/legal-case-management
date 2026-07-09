import api from "../api/api";

export const getCases = async (token) => {
  const response = await api.get("/cases", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createCase = async (caseData, token) => {
  const response = await api.post("/cases", caseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateCase = async (id, caseData, token) => {
  const response = await api.put(`/cases/${id}`, caseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteCase = async (id, token) => {
  const response = await api.delete(`/cases/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
