import { useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'

const options = [
  { label: 'Grapes', value: 'grapes' },
  { label: 'Mango', value: 'mango' },
  { label: 'Strawberry', value: 'strawberry', disabled: true },
  { label: 'florescent', value: 'florescent' },
  { label: 'orange', value: 'orange' },
  { label: 'wall', value: 'wall' },
  { label: 'hat', value: 'hat' },
]

const MyMultiSelect = (props) => {
  const [selected, setSelected] = useState([])

  return (
    <div className="selectbox">
      <h1>{props.name}</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="{props.label}"
        isCreatable={true}
      />
    </div>
  )
}

export default MyMultiSelect
