fetch('../sidebar/sidebar.html')
      .then(data => data.text())
      .then(html => document.getElementById('sidebar-placeholder').innerHTML = html);