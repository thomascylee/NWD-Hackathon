let count = 0;
let itinerary = {
    1: [1, 'Kwun Tong Plaza', '0900', '0930', '30 mins', 'nice place!'],
    2: [2, 'APM', '0945', '1030', '45 mins', 'Great shopping mall!'],
    3: [3, 'Asia Pacific', '1100', '1130', '30 mins', 'Not too nice...'],
    4: [4, '華嫂冰室', '1200', '1230', '30 mins', 'Recommended!'],
    5: [5, 'The Wave', '1245', '1445', '2 hours', 'Come and discrupt us!']
}

$(document).ready(() => {
    $('.btn-circle').click(() => {
        count = (count + 1) % 6;
        console.log(count);
        $('.map').removeClass(`map${(count === 0 )? 5 : count - 1}`).addClass(`map${count}`);
        logLocation(count);    
    } )
})

function logLocation(logData) {
    let userTemplate = $('#table-template').clone();
    let userContainer = userTemplate.contents().find('p');
    let tableContainer = $('#table-container');
    if (logData === 0) {
        $('.itinerary-row').remove();
    } else {
        itinerary[`${logData}`].forEach((details, index) => {
            userContainer.eq(index).html(details);
        });
        tableContainer.append(userTemplate.html());
    }
}
