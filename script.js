// Fetch user data from API and display it in a list
fetchUserData();

function fetchUserData() {
    fetch('https://gorest.co.in/public-api/users')
        .then(handleResponse)
        .then(displayUsers)
        .catch(handleError);
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function displayUsers(data) {
    const userList = data.data;
    const userContainer = document.getElementById('user-list');
    userList.forEach(user => {
        const listItem = document.createElement('li');
        const genderImage = document.createElement('img');
        genderImage.alt = user.gender;
        if (user.gender === 'male') {
            genderImage.src = '../user list/male.jpg';
        } else if (user.gender === 'female') {
            genderImage.src = '../user list/female.jpeg';
        }
        const nameParagraph = document.createElement('p');
        nameParagraph.innerHTML = `
            <strong>${user.name}</strong><br>
            Gender: ${user.gender}<br>
            Email: ${user.email}
        `;
        listItem.appendChild(genderImage);
        listItem.appendChild(nameParagraph);
        userContainer.appendChild(listItem);
    });
}

function handleError(error) {
    console.error('Error:', error);
}
