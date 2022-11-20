import car from './car'
import logged from './log'
import {combineReducers}  from '@reduxjs/toolkit'

const allReducers = combineReducers({
    car,
    logged
})

export default allReducers;