const main = () => {
  var canvasz = document.getElementById("canvasz");
  var gl = canvasz.getContext("webgl");

  var vertices = [
    // Z
    -0.8,
    0.8, // B
    -0.6,
    0.6, // A
    -0.4,
    0.8, // O
    -0.2,
    0.6, // P
    0.0,
    0.8, // Q
    0.2,
    0.6, // R
    0.4,
    0.8, // S
    // 0.63635,
    // 0.56427, // T
    0.62622,
    0.58591, // T
    0.8,
    0.8, // C
    0.63635,
    0.56427, // T
    0.4,
    0.6, // D
    // 0.19792,
    // -0.0575, // F
    0,
    -0.2, // F
    0.63635,
    0.56427, // T

    // BAWAH
    0.8,
    -0.8, // H
    0.6,
    -0.6, // G
    0.4,
    -0.8, // V
    0.2,
    -0.6, // W
    0.0,
    -0.8, // Z
    -0.2,
    -0.6, // A1
    -0.4,
    -0.8, // B1
    -0.65,
    -0.6, // C1
    -0.8,
    -0.8, // I
    // -0.19792,
    // 0.0575, // N
    0.0,
    0.2, // N
    -0.4,
    -0.6, // M
  ];

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
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 13);
  gl.drawArrays(gl.TRIANGLE_STRIP, 13, 11);
};
