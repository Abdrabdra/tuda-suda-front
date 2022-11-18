import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  step: number;
  stepTitle: string;

  form: {
    selectedTransport: string;
    selectedBrand: string;
    selectedMark: string;
    selectedManufacture: string;
    selectedCase: string;
    selectedGeneration: string;
    selectedEngine: string;
    selectedGear: string;
    selectedCondition: string;
    selectedPrice: number;
    selectedPicture: any;
    selectedContactName: string;
    selectedContactNumber: string;
  };
}

const initialState: IInitState = {
  step: 0,
  stepTitle: "",

  form: {
    selectedTransport: "",
    selectedBrand: "",
    selectedMark: "",
    selectedManufacture: "",
    selectedCase: "",
    selectedGeneration: "",
    selectedEngine: "",
    selectedGear: "",
    selectedCondition: "",
    selectedPrice: 0,
    selectedPicture: "",
    selectedContactName: "",
    selectedContactNumber: "",
  },
};

const stepperReducer = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setStep: (state, { payload }) => {
      state.step = payload;
    },
    setStepTitle: (state, { payload }) => {
      state.stepTitle = payload;
    },
    resetStep: (state) => {
      state.step = 0;
    },
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },

    setDefaultState: (state) => {
      state.form.selectedTransport = "";
      state.form.selectedBrand = "";
      state.form.selectedMark = "";
      state.form.selectedManufacture = "";
      state.form.selectedCase = "";
      state.form.selectedGeneration = "";
      state.form.selectedEngine = "";
      state.form.selectedGear = "";
      state.form.selectedCondition = "";
      state.form.selectedPrice = 0;
      state.form.selectedPicture = "";
      state.form.selectedContactName = "";
      state.form.selectedContactNumber = "";
    },
    setFormSelectedTransport: (state, { payload }) => {
      state.form.selectedTransport = payload;
    },
    setFormSelectedBrand: (state, { payload }) => {
      state.form.selectedBrand = payload;
    },
    setFormSelectedMark: (state, { payload }) => {
      state.form.selectedMark = payload;
    },
    setFormSelectedManufacture: (state, { payload }) => {
      state.form.selectedManufacture = payload;
    },
    setFormSelectedCase: (state, { payload }) => {
      state.form.selectedCase = payload;
    },
    setFormSelectedGeneration: (state, { payload }) => {
      state.form.selectedGeneration = payload;
    },
    setFormSelectedEngine: (state, { payload }) => {
      state.form.selectedEngine = payload;
    },
    setFormSelectedGear: (state, { payload }) => {
      state.form.selectedGear = payload;
    },
    setFormSelectedCondition: (state, { payload }) => {
      state.form.selectedCondition = payload;
    },
    setFormSelectedPrice: (state, { payload }) => {
      state.form.selectedPrice = payload;
    },
    setFormSelectedPicture: (state, { payload }) => {
      state.form.selectedPicture = payload;
    },
    setFormSelectedContactName: (state, { payload }) => {
      state.form.selectedContactName = payload;
    },
    setFormSelectedContactNumber: (state, { payload }) => {
      state.form.selectedContactNumber = payload;
    },
  },
});

export const {
  setStep,
  resetStep,
  incrementStep,
  decrementStep,
  setStepTitle,

  setDefaultState,
  setFormSelectedTransport,
  setFormSelectedBrand,
  setFormSelectedMark,
  setFormSelectedManufacture,
  setFormSelectedCase,
  setFormSelectedGeneration,
  setFormSelectedEngine,
  setFormSelectedGear,
  setFormSelectedCondition,
  setFormSelectedPrice,
  setFormSelectedPicture,
  setFormSelectedContactName,
  setFormSelectedContactNumber,
} = stepperReducer.actions;

export default stepperReducer.reducer;
