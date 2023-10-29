const browserInformation = {
    name: 'Opera',
    version: 108
  };
  
  localStorage.setItem('browser', JSON.stringify(browserInformation));

const value = localStorage.getItem('browser');
