import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")


/*=========================================================================
======================== RESPONSIVE VALUES ================================
=========================================================================*/   

//let TEXT_CONST = {}

/*===================================================
= MOBILE PHONES
===================================================*/

if ( width < 600 ) {
    TEXT_CONST = {
        
        
        SIZE: {
            BUTTON: 16,
            CATEGORY_BUTTON_LABEL: 12,
            DRAWER_HEADER: 18,
            DRAWER_LABEL: 18,
            HEADER: 18,
            TAB_NAV_LABEL: 16,

            
            DEFAULT: {
                X_SMALL: 12,
                SMALL: 14,
                MEDIUM: 16,
                LARGE: 18,
                X_LARGE: 20
            },
        },

        PADDING: {
            HEADER: {
                TOP: 4,
                LEFT: 8
            }
        },

        LINE_HEIGHT: {
            CATEGORY_BUTTON_LABEL: 14,
        }
    }
   
    
/*===================================================
= SMALLER TABLETS
===================================================*/

} else if ( width > 600 ) {
    TEXT_CONST = {
        
        SIZE: {
            BUTTON: 20,
            CATEGORY_BUTTON_LABEL: 15,
            DRAWER_HEADER: 22,
            DRAWER_LABEL: 20,
            HEADER: 22,
            TAB_NAV_LABEL: 18,
            
            DEFAULT: {
                X_SMALL: 15,
                SMALL: 17,
                MEDIUM: 19,
                LARGE: 21,
                X_LARGE: 23
            }

        },

        PADDING: {
            HEADER: {
                TOP: 4,
                LEFT: 8
            }
        },

        LINE_HEIGHT: {
            CATEGORY_BUTTON_LABEL: 17,
        },


    }

}

let GLOBAL_TEXT = {}

GLOBAL_TEXT = {

    /*=========================================================================
    ======================== MOBILE PHONE STYLES ==============================
    =========================================================================*/

    /*===========================================================
    = HEADER
    ===========================================================*/

    HEADER: {
        fontSize: TEXT_CONST.SIZE.HEADER,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        paddingLeft: TEXT_CONST.PADDING.HEADER.LEFT,
        paddingTop: TEXT_CONST.PADDING.HEADER.TOP
    },

    NARROW_HEADER: {
        fontSize: TEXT_CONST.SIZE.HEADER,
        color: '#303036',
        fontFamily: 'Poppins-SemiBold',
    },


    /*===========================================================
    = DRAWER
    ===========================================================*/

    DRAWER_HEADER: {
        fontSize: TEXT_CONST.SIZE.DRAWER_HEADER,
        color: '#fff',
        //fontFamily: 'Poppins-SemiBold',
        paddingTop: TEXT_CONST.PADDING.HEADER.TOP
    },

    DRAWER_LABEL: {
        fontSize: TEXT_CONST.SIZE.DRAWER_LABEL,
        color: '#303036',
        //fontFamily: 'Poppins-Medium'
    },

    /*===========================================================
    = TAB NAV
    ===========================================================*/

    TAB_NAV_LABEL: {
        //fontFamily: 'Poppins-SemiBold',
        fontSize: TEXT_CONST.SIZE.TAB_NAV_LABEL,
        color: '#fff',
        height: 32,
        lineHeight: 32,
    },


    /*===========================================================
    = BUTTONS
    ===========================================================*/

    BUTTON: {
        color: '#fff',
        fontSize: TEXT_CONST.SIZE.BUTTON,
        fontFamily: 'Poppins-Bold'
    },
    EDIT_BUTTON: {
        color: '#3498DB',
        fontSize: TEXT_CONST.SIZE.BUTTON,
        fontFamily: 'Poppins-Bold'
    },
    BORDER_BUTTON: {
        fontSize: TEXT_CONST.SIZE.BUTTON,
        fontFamily: 'Poppins-Bold'
    },

    FEED_LOCATIONS_TITLE_BUTTON: {
        color: '#00c1f0',
        fontSize: TEXT_CONST.SIZE.SMALL,
       fontFamily: 'Poppins',
        borderWidth: 1, 
        borderColor: '#00c1f0', 
        borderRadius: 6, 
        paddingTop: 3, 
        paddingBottom: 3, 
        paddingRight: 6, 
        paddingLeft: 6, 
        marginBottom: 8

    },

    /*===========================================================
    = CATEGORY BUTTON LABELS
    ===========================================================*/

    CATEGORY_BUTTON_LABEL: {
        width: '90%',
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.CATEGORY_BUTTON_LABEL,
        //fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        lineHeight: TEXT_CONST.LINE_HEIGHT.CATEGORY_BUTTON_LABEL
    },


    /*===========================================================
    = GENERIC
    ===========================================================*/

    /*== EXTRA LARGE ==*/

    X_LARGE_BOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        //fontFamily: 'Poppins-SemiBold',
    },
    X_LARGE_BOLD_ITALIC: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-SemiBoldItalic',
    },


    X_LARGE_SEMIBOLD: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-Medium',
    },
    X_LARGE_SEMIBOLD_ITALIC: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-MediumItalic',
    },


    X_LARGE: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-Regular'
    },
    X_LARGE_ITALIC: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-Italic'
    },


    X_LARGE_LIGHT: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-Light'
    },
    X_LARGE_LIGHT_ITALIC: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        fontFamily: 'Poppins-LightItalic'
    },


    /*== LARGE ==*/

    LARGE_BOLD: {
        color: '#303036',
        fontSize:  TEXT_CONST.SIZE.DEFAULT.LARGE,
        fontFamily: 'Poppins-SemiBold',
    },
    LARGE_BOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        fontFamily: 'Poppins-SemiBoldItalic',
    },


    LARGE_SEMIBOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        fontFamily: 'Poppins-Medium',
    },
    LARGE_SEMIBOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        fontFamily: 'Poppins-MediumItalic',
    },


    LARGE: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        //fontFamily: 'Poppins-Regular'
    },
    LARGE_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        //fontFamily: 'Poppins-Italic'
    },


    LARGE_LIGHT: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        //fontFamily: 'Poppins-Light'
    },
    LARGE_LIGHT_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.LARGE,
        //fontFamily: 'Poppins-LightItalic'
    },



    /*== MEDIUM ==*/

    MEDIUM_BOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-SemiBold'
    },
    MEDIUM_BOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-SemiBoldItalic'
    },


    MEDIUM_SEMIBOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-Medium'
    },
    MEDIUM_SEMIBOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
       // fontFamily: 'Poppins-MediumItalic'
    },


    MEDIUM: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-Regular'
    },
    MEDIUM_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
       // fontFamily: 'Poppins-Italic'
    },


    MEDIUM_LIGHT: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-Light'
    },
    MEDIUM_LIGHT_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        //fontFamily: 'Poppins-LightItalic'
    },


    /*== SMALL ==*/

    SMALL_BOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        //fontFamily: 'Poppins-SemiBold'
    },
    SMALL_BOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        // fontFamily: 'Poppins-SemiBoldItalic'
    },



    SMALL_SEMIBOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-Medium'
    },
    SMALL_SEMIBOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-MediumItalic'
    },



    SMALL: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-Regular'
    },
    SMALL_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-Italic'
    },


    SMALL_LIGHT: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-Light'
    },
    SMALL_LIGHT_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.SMALL,
        fontFamily: 'Poppins-LightItalic'
    },



    /*== EXTRA SMALL ==*/

    X_SMALL_BOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-SemiBold'
    },
    X_SMALL_BOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-SemiBoldItalic'
    },


    X_SMALL_SEMIBOLD: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-Medium'
    },
    X_SMALL_SEMIBOLD_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-MediumItalic'
    },


    X_SMALL: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-Regular'
    },
    X_SMALL_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-Italic'
    },
    

    X_SMALL_LIGHT: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-Light'
    },
    X_SMALL_LIGHT_ITALIC: {
        color: '#303036',
        fontSize: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        fontFamily: 'Poppins-LightItalic'
    },        


    /*===========================================================
    = LOADING TEXT
    ===========================================================*/

    LOADING_TEXT_X_LARGE: {
        margin: 4,
        height: TEXT_CONST.SIZE.DEFAULT.X_LARGE,
        width: '40%',
        backgroundColor: '#d9d9da'
    },

    LOADING_TEXT_LARGE: {
        margin: 4,
        height: TEXT_CONST.SIZE.DEFAULT.LARGE,
        width: '40%',
        backgroundColor: '#d9d9da'
    },

    LOADING_TEXT_MEDIUM: {
        margin: 4,
        height: TEXT_CONST.SIZE.DEFAULT.MEDIUM,
        width: '40%',
        backgroundColor: '#d9d9da'
    },

    LOADING_TEXT_SMALL: {
        margin: 4,
        height: TEXT_CONST.SIZE.DEFAULT.SMALL,
        width: '40%',
        backgroundColor: '#d9d9da'
    },

    LOADING_TEXT_X_SMALL: {
        margin: 4,
        height: TEXT_CONST.SIZE.DEFAULT.X_SMALL,
        width: '40%',
        backgroundColor: '#d9d9da'
    },

}


export { GLOBAL_TEXT }