// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import { VehicleActionTypes, VehicleAction } from '../actions/vehicle.action';
import { VehicleState } from '../models/state.model';

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: VehicleAction
): VehicleState {
  console.log(action);
  switch (action.type) {
    case VehicleActionTypes.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case VehicleActionTypes.LOAD_YEARS_FAIL: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        years: action.payload.years
      };
    }
    case VehicleActionTypes.LOAD_MAKES: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_MAKES_FAIL: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        makes: action.payload.makes
      };
    }
    case VehicleActionTypes.LOAD_MODELS: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_MODELS_FAIL: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        models: action.payload.models
      };
    }
    case VehicleActionTypes.LOAD_TRIMS: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_TRIMS_FAIL: {
      return {
        ...state
      };
    }
    case VehicleActionTypes.LOAD_TRIMS_SUCCESS: {
      return {
        ...state,
        trims: action.payload.trims
      };
    }
  }
}
