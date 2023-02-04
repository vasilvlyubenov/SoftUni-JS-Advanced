function json(jsonString) {
    const result = [];
    const converted = JSON.parse(jsonString);
    result.push('<table>');

    const props = Object.keys(converted[0]);

    result.push(`  <tr>${props.map(el => `<th>${escapeHTML(el)}</th>`).join('')}</tr>`);

    for (const object of converted) {
        result.push(`  <tr>${props.map(el => `<td>${escapeHTML(object[el])}</td>`).join('')}</tr>`);
    }
    result.push('</table>');

    console.log(result.join('\n'));

    function escapeHTML(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }
}

json(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

json(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);