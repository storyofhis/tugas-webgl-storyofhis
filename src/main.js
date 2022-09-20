const main = () => {
  var canvasz = document.getElementById("canvasz");
  var gl = canvasz.getContext("webgl");

  var vertices = [
    // I
    -0.56082, 0.70125,
    -0.45, 0.7,
    -0.56089, 0.32041,

    -0.43819, 0.2992,
    -0.55928, 0.29805,
    -0.43875, 0.70101,

    // Z
    0.4, 0.6,
    0.4, 0.7,
    0.45, 0.65,
    0.5, 0.7,
    0.55, 0.65,
    0.6, 0.7,
    0.65, 0.65,
    0.7, 0.7,
    0.76614, 0.64979,
    0.8, 0.7,
    0.76614, 0.64979,
    0.7, 0.65,
    0.73046, 0.5957,
    0.67292, 0.5823,
    0.68986, 0.5347,
    0.64339, 0.5048,
    0.6, 0.4,

    0.8, 0.4,
    0.8, 0.3,
    0.74978, 0.349,
    0.7, 0.3,
    0.65, 0.35,
    0.6, 0.3,
    0.55, 0.35,
    0.5, 0.3,
    0.434, 0.35,
    0.4, 0.3,
    0.434, 0.35,
    0.5, 0.35,
    0.4745, 0.4115,
    0.53168, 0.429198,
    0.5182, 0.4772,
    0.5578, 0.4945,
    0.5558, 0.5337,
    0.58, 0.55, 
    0.5691, 0.55364,
    0.6, 0.6,  

    // 0
    -0.3, -0.2,
    -0.4, -0.3,
    -0.44, -0.2,
    -0.45863, -0.29747,
    -0.48, -0.2,
    -0.48199, -0.29601,
    -0.5, -0.2,
    -0.5, -0.3,
    -0.52, -0.2, 
    -0.52432, -0.29747,
    -0.55, -0.2,
    -0.54914, -0.29455,
    -0.575, -0.2,
    -0.58125, -0.29455,
    -0.6, -0.2,
    -0.6, -0.3,
    -0.62, -0.2,
    -0.62213, -0.29455,
    -0.64, -0.2,
    -0.64694, -0.29309,
    -0.67, -0.2,
    -0.67468, -0.29455,
    -0.7, -0.2,
    -0.7, -0.3,
    -0.8, -0.2,
    -0.70533, -0.33251,
    -0.79292, -0.33543,
    -0.70242, -0.35878,
    -0.37, -0.8,
    -0.70679, -0.38214,
    -0.8, -0.4,
    -0.7, -0.4,
    -0.8, -0.43,
    -0.70242, -0.42885,
    -0.8, -0.455,
    -0.70242, -0.45805,
    -0.8, -0.485,
    -0.6995, -0.48724,
    -0.8, -0.5,
    -0.70242, -0.52082,
    -0.8, -0.535, 
    -0.69804, -0.54709,
    -0.8, -0.565,
    -0.70533, -0.57629,
    -0.8, -0.6,
    -0.7, -0.6,
    -0.8, -0.625, 
    -0.70242, -0.6303,
    -0.8, -0.655,
    -0.70096, -0.66242,
    -0.8, -0.68,
    -0.7, -0.7,
    -0.8, -0.7,
    -0.69658, -0.72519,
    -0.79292, -0.73248,
    -0.70533, -0.74854,
    -0.8, -0.78,
    -0.69658, -0.7865,
    -0.8, -0.8,
    -0.70242, -0.82299,
    -0.8, -0.9,
    -0.61775, -0.79817,
    -0.6, -0.9,
    -0.6, -0.8,
    -0.55498, -0.89452,
    -0.55352, -0.79963,
    -0.52, -0.9,
    -0.5, -0.8,
    -0.47761, -0.89014,
    -0.47177, -0.79671,
    -0.45, -0.9,
    -0.44112, -0.80109,
    -0.41338, -0.88868,
    -0.4, -0.8,
    -0.3, -0.9,
    -0.39878, -0.74124,
    -0.7, -0.3,
    -0.4, -0.7,
    -0.3,-0.66,
    -0.40608, -0.65658,
    -0.3, -0.62,
    -0.39878, -0.61278,
    -0.3, -0.58,
    -0.3944, -0.57191,
    -0.3, -0.51,
    -0.4, -0.5,
    -0.3, -0.48,
    -0.4017, -0.46681,
    -0.3, -0.445,
    -0.40316, -0.42155,
    -0.3, -0.4,
    -0.4, -0.4,
    -0.3, -0.365,
    -0.4017, -0.36316,
    -0.30536, -0.33543,
    -0.39878, -0.32959,
    -0.3, -0.2,

    -0.3, -0.2,
    -0.8, -0.2,
    -0.8, -0.9,
    -0.3, -0.9,
    -0.3, -0.2,

    // 4
    0.63102, -0.20546,
    0.4, -0.5,
    0.4, -0.6,
    0.8, -0.6,
    0.8014, -0.93796,
    0.90036, -0.93634,
    0.9, -0.3,
    0.8, -0.3,
    0.8, -0.5,
    0.51998, -0.50398,
    0.70928, -0.26735,
    0.63102, -0.20546,
  ]
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  let vertexShaderCode = `
      attribute vec2 aPosition;
      void main() {
          float x = aPosition.x;
          float y = aPosition.y;
          gl_PointSize = 10.0;
          gl_Position = vec4(x, y, 0.0, 1.0);
      }
    `;
  let vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject);

  // ganti warna tulisan
  let fragmentShaderCode = `
  precision mediump float;
  void main() {
      float r = 128.0;
      float g = 128.0;
      float b = 128.0;
      gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

  let fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject);

  let program = gl.createProgram();
  gl.attachShader(program, vertexShaderObject);
  gl.attachShader(program, fragmentShaderObject);
  gl.linkProgram(program);
  gl.useProgram(program);

  let aPosition = gl.getAttribLocation(program, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  // gl.clearColor(1.0, 0.65, 0.0, 1.0);
  
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  // initBkgnd();
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // // I
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.drawArrays(gl.TRIANGLES, 3, 3);
  // Z
  gl.drawArrays(gl.TRIANGLE_STRIP, 6, 17)
  gl.drawArrays(gl.TRIANGLE_STRIP, 23, 20)

  // 0
  gl.drawArrays(gl.LINE_LOOP, 43, 102)
  // 4
  gl.drawArrays(gl.LINE_LOOP, 145, 12)
};

// function initBkgnd(){
//   backTex = gl.createTexture();
//   backTex.Img = new Image();
//   backTex.Img.onload = function() {
//     handleBkTex(backTex);
//   }
//   backTex.Img.src = "./assets/macbook.svg"
// }

// function handleBkTex(tex) {
//   gl.bindTexture(gl.TEXTURE_2D, tex);
//   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
//   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.Img);
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
//   gl.bindTexture(gl.TEXTURE_2D, null);
// }
