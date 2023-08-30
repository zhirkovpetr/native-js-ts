import React from "react";

type LessonsType = {
  title: string
  name?: string
}

type AddressType = {
  street: StreetType
}

type StreetType = {
  title: string
}

export type ManType = {
  name: string
  age: number
  lessons: LessonsType[]
  address: AddressType
}

type PropsType = {
  title: string
  man: ManType
  food: string[]
  car: { model: string }
}

export const ManComponent = (props: PropsType) => {
  const {title, man: {name}, ...restProps} = props
  return <div>
    <h1>{title}</h1>
    <hr/>
    <div>
      {name}
    </div>
    <div>
      {restProps.car.model}
    </div>
  </div>
}
