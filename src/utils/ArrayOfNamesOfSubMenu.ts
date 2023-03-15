type PropsArray={
  index:number
  namesOfList:string[]
  className:string
}

const ArrayOfNamesOfSubMenu: PropsArray[]=[
  {
    index:2,
    namesOfList:['All','Auto Shows','First Contact','Hi-Tech','Motor sports','New Generations','Oldies'],
    className:"sub-menu sub-menu__cars",
  },
   {
    index:5,
    namesOfList:['Deals','Life','Tuning'],
    className:"sub-menu sub-menu__more",
  },
]
export default ArrayOfNamesOfSubMenu