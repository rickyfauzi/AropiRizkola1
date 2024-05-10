// Daftar mata kuliah favorit (sebagai contoh)
var courses = [
    { nama: "Matematika Diskrit", nim: "123456" },
    { nama: "Algoritma dan Pemrograman", nim: "234567" },
    { nama: "Basis Data", nim: "345678" }
];

// Fungsi untuk menampilkan daftar mata kuliah
function displayCourses() {
    var courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    courses.forEach(function(course, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<span>' + course.nama + ' - ' + course.nim + '</span>' +
                             '<button onclick="editCourse(' + index + ')">Edit</button>' +
                             '<button onclick="deleteCourse(' + index + ')">Delete</button>';
        courseList.appendChild(listItem);
    });
}

// Fungsi untuk menambahkan mata kuliah baru
function addCourse(e) {
    e.preventDefault();
    var courseName = document.getElementById('courseName').value;
    var courseNIM = document.getElementById('courseNIM').value;
    if (courseName && courseNIM) {
        courses.push({ nama: courseName, nim: courseNIM });
        displayCourses();
        document.getElementById('courseForm').reset();
    }
}

// Fungsi untuk menghapus mata kuliah
function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
}

// Fungsi untuk mengedit mata kuliah
function editCourse(index) {
    var newName = prompt('Masukkan nama mata kuliah baru:');
    var newNIM = prompt('Masukkan NIM baru:');
    if (newName && newNIM) {
        courses[index].nama = newName;
        courses[index].nim = newNIM;
        displayCourses();
    }
}

// Panggil fungsi untuk menampilkan daftar mata kuliah saat halaman dimuat
window.onload = function() {
    displayCourses();
    document.getElementById('courseForm').addEventListener('submit', addCourse);
};

// Fungsi untuk menambahkan mata kuliah baru
function addCourse(e) {
    e.preventDefault();
    var courseName = document.getElementById('courseName').value;
    var courseNIM = document.getElementById('courseNIM').value;
    if (courseName && courseNIM) {
        courses.push({ nama: courseName, nim: courseNIM });
        displayCourses();
        document.getElementById('courseForm').reset();
    } else {
        alert("Silakan lengkapi nama mata kuliah dan NIM.");
    }
}

