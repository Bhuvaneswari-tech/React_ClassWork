import React from 'react'

const withTheme = (WrappedComponent) =>{
    return function ThemeComponent(props){
        const theme = "dark";
        return <WrappedComponent {...props} theme={theme} />
    }
}

const Button = ({theme}) =>(
    <button style= {{background: theme === 'dark'?'black':'white', color:'white'}}>
        Themed Button
    </button>
)

const ThemedButton = withTheme(Button)
const Example5 = () => {
  return (
    <div>
        <ThemedButton />
    </div>
  )
}

export default Example5