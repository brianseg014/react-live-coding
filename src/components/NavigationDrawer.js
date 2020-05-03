import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'


const useStyles = makeStyles(theme => ({
    paddingAppBar: {
        marginTop: 64,
        height: 'calc(100% - 64px)'
    }
}))

const NavigationDrawer = (props) => {
    const classes = useStyles()
    
    const {
        open,
        onClose
    } = props
    
    return (
        <React.Fragment>
            <Hidden mdDown>
                <Drawer
                    variant={"permanent"}
                    anchor={"left"}
                    open={open}
                    onClose={onClose}
                    classes={{ paper: classes.paddingAppBar }}
                >
                    Hola Mundo
                </Drawer>
            </Hidden>
            <Hidden lgUp>
                <Drawer
                    variant={"temporary"}
                    anchor={"left"}
                    open={open}
                    onClose={onClose}
                >
                    Hola Mundo
                </Drawer>
            </Hidden>
        </React.Fragment>
    )
}

export default NavigationDrawer
