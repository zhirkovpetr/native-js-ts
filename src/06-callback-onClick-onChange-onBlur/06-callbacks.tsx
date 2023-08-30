import {ChangeEvent} from "react";

const callback = (): number => {
  //alert('Hello')
  return 12
}

window.setTimeout(callback, 1000)

export const User = () => {

  const deleteUser = () => {
    alert('delete user')
  }

  const saveUser = () => {
    alert('save user')
  }

  const onNameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log('change name:' + e.currentTarget.value)
  }

  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed:' + e.currentTarget.value)
  }

  const focusLostHandler = () => {
    console.log('focus lost')
  }

  return <div>
    <textarea defaultValue={'Petr'} onChange={onNameChanged} onBlur={focusLostHandler}/>
    <input onChange={onAgeChanged} type={'number'}/>
    <button onClick={deleteUser}>delete</button>
    <button onClick={saveUser}>save</button>
  </div>
}
