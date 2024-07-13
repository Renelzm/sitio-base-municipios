import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const municipalSlice = createSlice({
  name: 'MunicipalInfo',
  initialState: {
    nombreInstitucion: 'Municipio de Matamoros Coahuila',
    logoUrl: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2022/11/cropped-cropped-cropped-logo-GOBIERNOmpal-1024x277-1-1-e1691610713688-1.png",
    email: 'municipio@matamoroscoahuila.com',
    telefono: '8441000000',
    isLoading: false,
    
  },
  reducers: {
    
  },
})

