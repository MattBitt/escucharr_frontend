import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import axios from 'axios'
const url = 'http://127.0.0.1:9000/words/'
// const url = 'https://api.github.com/search/users?q=John&per_page=5'

// const options = [
//   { value: 65, label: 'A' },
//   { value: 66, label: 'B' },
//   { value: 67, label: 'C' },
//   { value: 61, label: 'QEr' },
// ]
// const options2 = [
//   { value: 'Grocery', label: 'Grocery', word: 'Groceryword' },
//   { value: 'Pharmacy', label: 'Pharmacy', word: 'Pharmacyword' },
//   { value: 'Electronic', label: 'Electronic', word: 'Electronicword' },
//   { value: 'Food', label: 'Food', word: 'Food' },
// ]
// const ages = ['10', '20', '30']

// const FCWidth = {
//   width: '20rem',
// }

const numberFieldRules = {
  min: { value: '0', message: 'Must be greater than 0' },
  max: { value: '99', message: 'Must be less than 99' },
}

export const TrackForm = ({ track, onSubmit, handleClose, source }) => {
  const [options, setOptions] = useState([''])
  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
    control,
    watch,
  } = useForm({
    defaultValues: { words: '' },
  })

  const [subtype, setSubtype] = useState([])
  // {defaultValues: { stack_overflow_autocomplete: null },

  // const onSubmit = (data) => {
  //   axios.put('http://127.0.0.1:9000/tracks/' + track.id, data)
  // }
  const handleOnSubmit = (data) => {
    console.log(JSON.stringify(data))
  }
  useEffect(() => {
    // reset form with user data
    reset(track)
  }, [track])

  useEffect(() => {
    const getData = async () => {
      const arr = []
      await axios.get(url).then((res) => {
        const result = { words: res.data }
        result.words.forEach((element) => {
          arr.push({ label: element.word, value: element.id })
        })
        setOptions(arr)
      })
    }
    getData()
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="track_title"
          control={control}
          defaultValue={track.track_title}
          rules={{ required: 'Track Title is required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Track Title"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        {/* <Controller
          name="endTimeString"
          control={control}
          defaultValue={msToTime(track.end_time)}
          rules={{
            required: 'End Time is required',
            pattern: {
              value: /^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
              message: 'Should be in the HH:MM:SS format',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="End Time"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        /> */}

        <Controller
          name="startTimeHour"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Start Time Hour"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Controller
          name="startTimeMinute"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Start Time Minute"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="startTimeSecond"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Start Time Second"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="endTimeHour"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="End Time Hour"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Controller
          name="endTimeMinute"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="End Time Minute"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="endTimeSecond"
          control={control}
          defaultValue=""
          rules={numberFieldRules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="End Time Second"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        {source && (
          <Controller
            name="source_id"
            control={control}
            // this shouldn't be a required field.  disable somehow?
            defaultValue={source.id}
            rules={{ required: 'Source ID is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Source Title"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        )}

        {/* <Controller
          control={control}
          name="testing_complex_autocomplete"
          defaultValue={[options[0]]}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              multiple
              options={options}
              getOptionLabel={(option) => option.label}
              onChange={(_, data) => onChange(data.value)}
              defaultValue={[options[0]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  defaultValue={[options[0]]}
                  fullWidth
                  inputRef={ref}
                  variant="outlined"
                  label="No way this works"
                />
              )}
            />
          )}
        /> */}
        {/* 
        <Controller
          control={control}
          name="stack_overflow_autocomplete"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              isOptionEqualToValue={(option, value) => option.id === value.id}
              options={options}
              multiple
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    label="my label"
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
                  />
                )
              }}
              onChange={(event, values, reason) => onChange(values)}
              value={value}
            />
          )}
        /> */}
        {/* 
        <Autocomplete
          multiple
          id="tags-standard"
          name="uncontrolled"
          freeSolo
          value={subtype}
          filterSelectedOptions
          options={options}
          onChange={(e, attr) => setSubtype(attr)}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="SubType"
              margin="normal"
            />
          )}
        /> */}
        {/* 
        <Controller
          name="age"
          control={control}
          type="text"
          defaultValue={[]}
          render={({ field }) => (
            <FormControl sx={FCWidth}>
              <InputLabel id="age">Age</InputLabel>
              <Select
                {...field}
                labelId="age"
                label="age"
                multiple
                defaultValue={[]}
              >
                {ages.map((age) => (
                  <MenuItem value={age} key={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        /> */}
        {/* 
        <Controller
          control={control}
          name="not_creatable_words"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Select
              options={options2}
              onChange={onChange}
              isMulti={true}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
            />
          )}
        /> */}

        <Controller
          name="words"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <CreatableSelect
              onChange={onChange}
              options={options}
              isMulti={true}
              // getOptionLabel={options.word}
              value={value}
              name={name}
              ref={ref}
            />
          )}
        />

        <Button variant="contained" onClick={() => reset()}>
          Reset Form
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Create Track
        </Button>
      </form>
    </div>
  )
}
