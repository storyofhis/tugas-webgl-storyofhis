const main = () => {
  var canvasz = document.getElementById("canvasz");
  var gl = canvasz.getContext("webgl");

  var vertices = [
    // I

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

  gl.clearColor(1.0, 0.65, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  //   gl.drawArrays(gl.LINE_LINES, 0, 4);
  gl.lineWidth(17);
  // gl.drawArrays(gl.TRIANGLE_STRIP, 0, 13);
  // gl.drawArrays(gl.TRIANGLE_STRIP, 13, 11);


  // Z
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 17)
  gl.drawArrays(gl.TRIANGLE_STRIP, 17, 20)
};


const hurufI = () => {
  const canvasI = document.getElementById("canvasi")
  const gl = canvasI.getContext("webgl")

  let vertices = [
    0.13671, 0.79998, -0.15527, 0.80539, -0.17238, -0.79106,

    0.1679, 0.79998, 0.16058, -0.79106, -0.15958, -0.79055,
  ];

  let buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  let vertexShaderCode = `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
    }
  `;
  let vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject);

  let fragmentShaderCode = `
    precision mediump float;
    // varying vec3 fragColor;
    void main() {
        float r = 0.0;
        float g = 0.0;
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }
  `;

  let fragmentShaderCode2 = `
      precision mediump float;
      void main() {
          float r = 0.0;
          float g = 1.0;
          float b = 0.0;
          gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    let fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode2); //
    gl.compileShader(fragmentShaderObject);

    let program = gl.createProgram();
  gl.attachShader(program, vertexShaderObject);
  gl.attachShader(program, fragmentShaderObject);
  //   gl.attachShader(program, fragmentShaderObject2);
  gl.linkProgram(program);
  gl.useProgram(program);

  let aPosition = gl.getAttribLocation(program, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  gl.clearColor(1.0, 0.65, 0.5, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.drawArrays(gl.TRIANGLES, 3, 3);
}