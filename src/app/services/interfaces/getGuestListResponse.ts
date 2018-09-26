export interface IGetGuestListResponse {
    code;
    Guest: [{
        ticket_type;

        guest_id;

        buy_total_ticket;

        __v;

        userImage;

        event_id;

        expireAt;

        country_code;

        guest_type;

        _id;

        email;

        ticket_price;

        createdAt;

        name;

        barCode;

        mobile;

        buyEvent: {

            event;
            sessions: [{
            }]
        }
    }]
}