// data/rsvpData.ts

type RSVP = {
  name: string;
  email: string;
  guests: string;
};

const rsvpList: RSVP[] = [];

export function addRSVP(rsvp: RSVP) {
  rsvpList.push(rsvp);
  console.log('RSVP Added:', rsvp);
}

export function getRSVPs() {
  return rsvpList;
}
const rsvpData = { addRSVP, getRSVPs };  
export default rsvpData;