var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

/* весь наш JavaScript код будет после этого комментария */

// Рендринг
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

// Сцена
var scene = new THREE.Scene();

// Добавление камеры на сцену,которая будет смотреть в определенную точку
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);

// Создание элементарного кубика
var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
// Материал кубика
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});

// Создание сетки
var cube = new THREE.Mesh(boxGeometry, basicMaterial);

// Добавление куба на поле
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

// Двигаем кубик по сцене чтобы освободить место
cube.position.x = -25;

// Добавление торуса
var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
// Добавление еще рдной фигуры
var dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
// Добавление света
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

// Отрисовка сцены
function render() {
	requestAnimationFrame(render);
    // вращение каждый кадр
    cube.rotation.y += 0.01;
    dodecahedron.rotation.y += 0.01;
    torus.rotation.y += 0.01;
    // увелечение
    t += 0.01;
    torus.scale.y = Math.abs(Math.sin(t));
    // перемещение объектов по сцене
    dodecahedron.position.y = -7*Math.sin(t*2);
	renderer.render(scene, camera);
}
var t = 0;
render();
