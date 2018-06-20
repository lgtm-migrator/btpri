import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import $ from 'jquery';
import { extractDescription } from './src';

$(document).ready(function() {
  const $input = $('#input');
  const $result = $('#result');

  function clearResult() {
    $result.empty();
  }

  function setResult(text) {
    clearResult();
    $result.text(text);
  }

  //-----------------------
  // Event register here
  //-----------------------

  $input.on('keyup', (event) => { 
    const val = $input.val();
    const res = extractDescription(val);
    setResult(res);
  });
});