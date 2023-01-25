import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

export const ComboBox = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
  } = useForm({
    defaultValues: {},
  })

  const handleOnSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  const options = [
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Pharmacy', label: 'Pharmacy' },
    { value: 'Electronic', label: 'Electronic' },
    { value: 'Food', label: 'Food' },
  ]

  console.log(errors)

  return (
    <div className="App">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Controller
          control={control}
          name="product_types"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Select
              options={options}
              onChange={onChange}
              isMulti={true}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
            />
          )}
        />
        {errors?.category?.type && <p>Error: {errors.category.type}</p>}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
