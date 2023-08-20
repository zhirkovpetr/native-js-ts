import {studentType} from "../02-object/02";
import {CityType, governmentBuildingsType, housesType} from "../02-object/02_02";


export const addSkill = (student: studentType, skill: string) => {
  student.technologes.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const studentActive = (student: studentType) => {
  student.isActive = true
}

export const studentCity = (student: studentType, cityName: string) => {
  return student.adress.city.city === cityName
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
  building.budget += budget
}

export const repairedHouse = (housesType: housesType) => {
  housesType.repaired = true
}

export const toFaceStaff = (buildingsType: governmentBuildingsType, staffCountOff: number) => {
  buildingsType.staffCount -= staffCountOff
}

export const toHairStaff = (buildingsType: governmentBuildingsType, staffCountOn: number) => {
  buildingsType.staffCount += staffCountOn
}

export const greatMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I want you be happy! All ${city.citizensNumber} mens!`
}

