var currentDate = (new Date().toISOString()).slice(0,10);
if(res.EndDate && res.EndDate !== '0000-00-00' &&
   Date.parse(res.EndDate) < Date.parse(currentDate) {
  res.ActiveStatus = 'Inactive'
} else {
  res.ActiveStatus = 'Active'
}