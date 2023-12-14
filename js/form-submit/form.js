function submitData() {

    // Collect form data
    const formData = new FormData(document.getElementById('form_id'));
    var Obtn = document.getElementById("submit_btn"); //submit button
    Obtn.innerHTML = "Please Wait..";
    // Send data to Google Sheets (replace YOUR_GOOGLE_FORM_URL with the actual Google Form URL)
    const googleFormUrl = 'https://script.google.com/macros/s/AKfycbxkTkFkhLdccmT7CuG1auqnRk_rZ7CLBTwecJ8puDJja4BZeawIQtVXiTXQAZ9ueuCkJQ/exec';
    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then(response => {
        // Handle success or error if needed
        console.log('Order submitted successfully');
        // console.log(response);
        // window.location.href = "/success"; // Redirect to success page
        
       
          //Obtn.textContent = "Submitted Succes";
         Obtn.innerHTML = "successful..✅";
        
      })
      .catch(error => {
        Obtn.innerHTML = "Err Occured..";
        // console.error('Error submitting order:', error);
        // window.location.href = "/err";
        // Optionally handle error and stay on the same page
      });
  }