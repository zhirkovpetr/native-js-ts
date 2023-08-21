import {StudentType} from "../02-object/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02-object/02_02";


export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const studentActive = (student: StudentType) => {
  student.isActive = true
}

export const studentCity = (student: StudentType, cityName: string) => {
  return student.address.city.city === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
  building.budget += budget
}

export const repairedHouse = (housesType: HousesType) => {
  housesType.repaired = true
}

export const toFaceStaff = (buildingsType: GovernmentBuildingsType, staffCountOff: number) => {
  buildingsType.staffCount -= staffCountOff
}

export const toHairStaff = (buildingsType: GovernmentBuildingsType, staffCountOn: number) => {
  buildingsType.staffCount += staffCountOn
}

export const greatMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I want you be happy! All ${city.citizensNumber} mens!`
}

