// Array to store citizen records
let citizens = [];

// Dummy user and admin credentials with email for password reset
const users = [
    { username: 'user1', password: 'userpass', email: 'user1@example.com' },
    { username: 'admin', password: 'adminpass', email: 'admin@example.com' }
];

// Function to calculate age from DOB
function calculateAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function for user login
function userLogin(role) {
    let username = prompt("Enter Username:");
    let password = prompt("Enter Password:");

    for (let user of users) {
        if (user.username === username && user.password === password) {
            if (role === 'user' && user.username.startsWith('user')) return true;
            if (role === 'admin' && user.username === 'admin') return true;
        }
    }
    console.log("Invalid credentials!");
    return false;
}

// Function to handle forgot password
function forgotPassword() {
    let username = prompt("Enter your Username:");
    let email = prompt("Enter your Email:");

    for (let user of users) {
        if (user.username === username && user.email === email) {
            let newPassword = prompt("Enter your new password:");
            user.password = newPassword;
            console.log("Password has been reset successfully.");
            return;
        }
    }
    console.log("Username or Email is incorrect!");
}

// Function to create an ID card
function createIDCard() {
    let cnic = prompt("Enter CNIC:");
    let name = prompt("Enter Name:");
    let fatherName = prompt("Enter Father's Name:");
    let motherName = prompt("Enter Mother's Name:");
    let dob = prompt("Enter Date of Birth (YYYY-MM-DD):");

    let age = calculateAge(dob);
    if (age < 18) {
        alert("Since you are under 18, you can create an underage smart card.");
        return;
    }

    let address = prompt("Enter Address:");
    let gender = prompt("Enter Gender:");

    let newCitizen = {
        cnic: cnic,
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        dob: dob,
        address: address,
        gender: gender
    };

    citizens.push(newCitizen);

    alert(`ID Card:
CNIC: ${cnic}
Name: ${name}
Father's Name: ${fatherName}
Mother's Name: ${motherName}
DOB: ${dob}
Address: ${address}
Gender: ${gender}`);

    alert("Your ID card will be received after 10 days.");
}

// Function to create a smart card
function createSmartCard() {
    let cnic = prompt("Enter CNIC:");
    let name = prompt("Enter Name:");
    let fatherName = prompt("Enter Father's Name:");
    let motherName = prompt("Enter Mother's Name:");
    let dob = prompt("Enter Date of Birth (YYYY-MM-DD):");

    let address = prompt("Enter Address:");
    let gender = prompt("Enter Gender:");

    let newCitizen = {
        cnic: cnic,
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        dob: dob,
        address: address,
        gender: gender
    };

    citizens.push(newCitizen);

    alert(`Smart Card:
CNIC: ${cnic}
Name: ${name}
Father's Name: ${fatherName}
Mother's Name: ${motherName}
DOB: ${dob}
Address: ${address}
Gender: ${gender}`);

    alert("Your smart card will be received after 10 days.");
}

// Function to create a bay form
function createBayForm() {
    let cnic = prompt('Enter your CNIC:');
    let name = prompt("Enter Child's Name:");
    let fatherName = prompt("Enter Father's Name:");
    let motherName = prompt("Enter Mother's Name:");
    let dob = prompt("Enter Date of Birth (YYYY-MM-DD):");
    let address = prompt("Enter Address:");
    let gender = prompt("Enter Gender:");

    let newChild = {
        cnic: cnic,
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        dob: dob,
        address: address,
        gender: gender
    };

    citizens.push(newChild);

    alert(`Bay Form:
CNIC: ${cnic}
Name: ${name}
Father's Name: ${fatherName}
Mother's Name: ${motherName}
DOB: ${dob}
Address: ${address}
Gender: ${gender}`);
}

// Function to view family details
function viewFamilyDetails() {
    let familyDetails = {
        fatherName: prompt("Enter Father's Name:"),
        motherName: prompt("Enter Mother's Name:"),
        brotherName: prompt("Enter Brother's Name:"),
        grandfatherName: prompt("Enter Grandfather's Name:")
    };

    alert(`Family Details:
Father's Name: ${familyDetails.fatherName}
Mother's Name: ${familyDetails.motherName}
Brother's Name: ${familyDetails.brotherName}
Grandfather's Name: ${familyDetails.grandfatherName}`);
}

// Admin function to add a citizen
function adminAddCitizen() {
    let cnic = prompt("Enter Citizen's CNIC:");
    let name = prompt("Enter Name:");
    let fatherName = prompt("Enter Father's Name:");
    let motherName = prompt("Enter Mother's Name:");
    let dob = prompt("Enter Date of Birth (YYYY-MM-DD):");
    let address = prompt("Enter Address:");
    let gender = prompt("Enter Gender:");

    let newCitizen = {
        cnic: cnic,
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        dob: dob,
        address: address,
        gender: gender
    };

    citizens.push(newCitizen);
    console.log("Citizen added successfully!");
}

// Admin function to delete a citizen
function adminDeleteCitizen() {
    let cnic = prompt("Enter CNIC to delete:");

    for (let i = 0; i < citizens.length; i++) {
        if (citizens[i].cnic === cnic) {
            citizens.splice(i, 1);
            console.log("Citizen deleted successfully!");
            return;
        }
    }
    console.log("Citizen not found!");
}

// Admin function to list all citizens
function adminListCitizens() {
    if (citizens.length === 0) {
        console.log("No citizens registered.");
    } else {
        console.log("List of all registered citizens:");
        for (let i = 0; i < citizens.length; i++) {
            let citizen = citizens[i];
            console.log(`${i + 1}. CNIC: ${citizen.cnic}, Name: ${citizen.name}, Father's Name: ${citizen.fatherName}, Mother's Name: ${citizen.motherName}, DOB: ${citizen.dob}, Address: ${citizen.address}, Gender: ${citizen.gender}`);
        }
    }
}

// Main user menu
function userMenu() {
    while (true) {
        let choice = prompt("Choose an option: 1. Create ID Card 2. Create Smart Card 3. Create Bay Form 4. View Family Details 5. Forgot Password 6. Logout");

        if (choice === '1') {
            createIDCard();
        } else if (choice === '2') {
            createSmartCard();
        } else if (choice === '3') {
            createBayForm();
        } else if (choice === '4') {
            viewFamilyDetails();
        } else if (choice === '5') {
            forgotPassword();
        } else if (choice === '6') {
            console.log("Logging out...");
            break;
        } else {
            console.log("Invalid choice! Please try again.");
        }
    }
}

// Main admin menu
function adminMenu() {
    while (true) {
        let choice = prompt("Choose an option: 1. Add Citizen 2. Delete Citizen 3. List All Citizens 4. Logout");

        if (choice === '1') {
            adminAddCitizen();
        } else if (choice === '2') {
            adminDeleteCitizen();
        } else if (choice === '3') {
            adminListCitizens();
        } else if (choice === '4') {
            console.log("Logging out...");
            break;
        } else {
            console.log("Invalid choice! Please try again.");
        }
    }
}

// Main application menu
function mainMenu() {
    while (true) {
        let role = prompt("Are you a user or admin? (type 'user' or 'admin')");

        if (role === 'user') {
            if (userLogin('user')) {
                userMenu();
            }
        } else if (role === 'admin') {
            if (userLogin('admin')) {
                adminMenu();
            }
        } else {
            console.log("Invalid role! Please try again.");
        }
    }
}

// Start the main menu
mainMenu();
