import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ApplicationBar from '@components/ApplicationBar'
import NavigationDrawer from '@components/NavigationDrawer'

const Page = (props) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    
    const handleMenuClick = () => {
        setIsDrawerOpen(true)
    }
    
    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }
    
    return (
        <React.Fragment>
            <CssBaseline />
            <ApplicationBar onMenuClick={handleMenuClick} />
            <NavigationDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
        </React.Fragment>
    )
}

export default Page
