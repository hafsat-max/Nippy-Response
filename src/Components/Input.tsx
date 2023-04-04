import { Select } from '@mantine/core';

function Input({labelName, optionData, placeHolder}) {
  return (
    <Select
      label={labelName}
      placeholder={placeHolder}
      data={optionData}
       
    />

    
  );
}
export default Input


// create repo push to master initial code will be on main. creata branch out of main call it developer. create a branch out of develop ansd call it hafsah.busari-dev
// create a pull request from my branch to the develop baranch from the browser, add him as reviewer git push origin develop