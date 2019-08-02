import { AsyncStorage } from 'react-native'
/*=====================================================
= WAIT (shortcut for pausing during async functions)
=====================================================*/

export const wait = (time) => {
    return new Promise(res => {
        setTimeout(function () {
            res()
        }, time)
    })
}


/*=====================================================
= debounce()
=====================================================*/

export const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/*=====================================================
= getToken()
=====================================================*/

export const getToken = async () => {
    const token = await AsyncStorage.getItem('token');

    return token
}


String.prototype.capitalFirst = function () {
    let original = this;
    return original.split(' ').map(word => {
        return word && word[0].toUpperCase() + word.substring(1)
    }).join(' ')
}
/*=====================================================
= shortenString()
=====================================================*/

export const shortenString = (string, desiredLength) => {
    if (string.length > desiredLength) {
        let newString = string.substr(0, desiredLength) + '...'
        return newString
    } else {
        return string
    }
}

/*=====================================================
= formatDate() -> mm/dd/yy
=====================================================*/

export const formatDate = (date) => {

    newDate = new Date(date)
    formattedDate = (newDate.getMonth() + 1) + "/" + (newDate.getDate()) + "/" + (newDate.getYear() - 100)

    return formattedDate

}


/*=====================================================
= formatDateTime() -> mm/dd/yy hh:mm
=====================================================*/

export const formatDateTime = (datetime) => {

    const newDatetime = new Date(datetime)

    let ampm = "am"

    let hour = (newDatetime.getHours())
    if (hour > 12) {
        ampm = "pm"
        hour = hour - 12
    }

    let minutes = (newDatetime.getMinutes())
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const formattedDateTime = (newDatetime.getMonth() + 1) + "/" + (newDatetime.getDate()) + "/" + (newDatetime.getYear() - 100) + "  " + hour + ":" + minutes + ampm

    return formattedDateTime
}

/*=====================================================
= formatTime() -> hh:mm
=====================================================*/

export const formatTime = (datetime) => {

    const newDatetime = new Date(datetime)

    let ampm = "am"

    let hour = (newDatetime.getHours())
    if (hour == 12) {
        ampm = "pm"
        hour = 12
    }
    if (hour > 12) {
        ampm = "pm"
        hour = hour - 12
    }

    let minutes = (newDatetime.getMinutes())
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const formattedTime = hour + ":" + minutes + ampm

    return formattedTime
}

/*=====================================================
= formatDOW() => "Monday"
=====================================================*/

export const formatDOW = (dayNumber) => {

    switch (dayNumber) {
        case 0:
            return "Sunday"
            break
        case 1:
            return "Monday"
            break
        case 2:
            return "Tuesday"
            break
        case 3:
            return "Wednesday"
            break
        case 4:
            return "Thursday"
            break
        case 5:
            return "Friday"
            break
        case 6:
            return "Saturday"
            break
    }
}



/*=====================================================
= formatPhoneNumber
=====================================================*/

export const formatPhoneNumber = (num) => {
    var input = num.toString();
    var numsOnlyInput = input.replace(/\D/g, "").substring(0, 10)

    if (numsOnlyInput.length == 7) {
        return numsOnlyInput.substring(0, 3) + "-" + numsOnlyInput.substring(3, 7)
    }
    else if (numsOnlyInput.length == 10) {
        return "(" + numsOnlyInput.substring(0, 3) + ") " + numsOnlyInput.substring(3, 6) + "-" + numsOnlyInput.substring(6, 10)
    }

    return numsOnlyInput
}

/*=====================================================
= formatThousands
=====================================================*/

export const formatThousands = (number) => {
    const fmtdNumber = parseFloat(number).toLocaleString('en')

    return fmtdNumber
}



/*=====================================================
= formatAge (months => years & months)
=====================================================*/

export const formatAge = (monthCount) => {
    const years = Math.floor(monthCount / 12)
    const months = (monthCount % 12)

    if (years) {
        return (
            `${years.toString()}`
        )
    } else if (years == 0 && months) {
        return (
            `${months.toString()} mo`
        )
    } else {
        return null
    }
}
export const CapitalizedText = (props) => {
    let text = props.children.slice(0, 1).toUpperCase() + props.children.slice(1, props.children.length);

    return (
        <View>
            <Text {...props}>{text}</Text>
        </View>
    );
};


function removeHTMLTag(body) {
    return body.replace(/<[/]?\w+>/g, "");
};

