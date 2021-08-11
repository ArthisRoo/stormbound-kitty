import React from 'react'
import Select from 'react-select'
import useSelectStyles from '../../hooks/useSelectStyles'
import { TAGS } from '../../constants/deck'

const TagsSelect = props => {
  const styles = useSelectStyles()
  const value = props.tags.map(value => ({ value, label: TAGS[value] }))
  const isAvailable = props.isTagAvailable || (() => true)
  const options = Object.entries(TAGS)
    .filter(([tag]) => isAvailable(tag))
    .map(([value, label]) => ({
      value,
      label,
    }))

  const id = props.id || 'tags-select'

  return (
    <>
      <label htmlFor={id}>{props.label || 'Tags'}</label>
      <Select
        styles={styles}
        id={id}
        name={props.name || id}
        value={value}
        isMulti
        onChange={options =>
          props.updateTags(options.map(option => option.value))
        }
        options={options}
        required={props.required}
        data-testid='deck-tags-input'
      />
    </>
  )
}

export default React.memo(TagsSelect)