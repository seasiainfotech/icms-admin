export interface IConfrencedetail {
    // name: string,
    // technology: string,
    // age: number
    code;
    organiser: {
        _id,
        country_code,
        first_name,
        last_name,
        email,
        mobile,
        password,
        organiserImage,
        user_id
    },

    event:{
            end_date_time,
            ticket_type,
            total_seats,
            title,
            location_name,
            _id,
            
           session:[{
              ticket_type,
              session_id,
              __v,
              event_id,
              speakers:[{
                _id,
                name,
                user_id,
                event_id,
                qualification,
                speakerImage,
                description,
                facebook_url,
                linkedIn_url,
                wikipedia_url,
                speaker_id,
                __v 
              }],
              start_date_time,
              end_date_time,
              title,
              _id,
              address,
              description,
              user_id,
              longitude,
              latitude,
              total_tickets,
           }],
            description,
            __v,
            event_id,
            eventImage,
            eventImage2,
            eventImage3,
            eventImage4,
            eventImage5,
            lng,
            user_id,        
            eventType,
            start_date_time,
            eventCategory,
            lat,
           live

           speaker: [
            {
                _id,
                name,
                user_id,
                event_id,
                session_id,
                qualification,
                speakerImage,
                description,
                speaker_id,
                __v
            }]
    };
}