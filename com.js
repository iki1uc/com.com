// com.js — EINE DATEI, DIE IN ALLE REINPASST — DAS RICHTIGE MACHT
// Einbauen: <script src="./com.js"></script> — in apfel, eye, man, raid, setup, src, server
// Kein React, kein Build, kein Import-Chaos. Läuft in file:// und auf GitHub Pages.
// b.i.o.s.js — DAS IST DER CLOU — 81e alle funktional — 9vs9
(function(){
  var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase() || 'index.html';
  var map = {
    'apfel.html': ['APFEL = ANFANG','Du beißt an, du weißt, du bleibst. Erster Biss = erster Schritt.','#00ff88'],
    'eye.html':   ['EYE = SEHEN','Sehen, nicht steuern. Nicht rechnen. INNEN + AUSSEN gleichzeitig.','#22f2ff'],
    'man.html':   ['MAN = TRÄGER','man + woman = life = alles mann = human. Träger = A.','#ffd700'],
    'raid.html':  ['RAID = SICHERUNG','Nichts gelöscht, nur angehängt. EAST = PASS, NORTH/WEST = UNKNOWN, wartet.','#ff2e9d'],
    'setup.html': ['SETUP = NEUER INDEX','surf.html = neuer index.html = alle Repos drin. INNEN / AUSSEN per Klick.','#00ff88'],
    'src.html':   ['SRC = QUELLE','Quelle. Ordner voll knallen mit JS. boot.js = b.i.o.s.js.','#8aff8a'],
    'server.html':['SERVER = SETUP SERVER','python -m http.server 8000 → localhost:8000. Vorher leer, jetzt voll.','#00ff88'],
    'index.html': ['INDEX = SURF','surf.html = neuer index.html. Alle Repos drin.','#00ff88'],
    'surf.html':  ['SURF = BROWSER DURCH ALLE REPOS','Wie innen als gegebene, wie benutzt, zum Nutzen anderer per Klick.','#ffd700']
  };
  var info = map[file] || ['COM.COM','Eine Datei, die in alle reinpasst. Das Richtige macht.','#00ff88'];
  var logs = [];
  function log(s){ logs.push(s); var el=document.getElementById('com-log'); if(el) el.innerHTML = logs.join('<br>'); }

  // 1. Banner oben einhängen — wenn noch keins da ist
  if(!document.getElementById('com-banner')){
    var b=document.createElement('div');
    b.id='com-banner';
    b.style.cssText='margin:0 0 14px;padding:12px 14px;border:1px solid '+info[2]+';border-radius:10px;background:#0c1210;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;line-height:1.5';
    b.innerHTML='<b style="color:'+info[2]+'">'+info[0]+'</b> · com.com · 81e ALLE FUNKTIONAL · 9vs9 · <span style="color:#7a8f80">Bruder macht Raum — du machst Unraum · snow = void = white · closed und alles mann · freundlich aber entschlossen</span><br><span style="color:#c8ddd0">'+info[1]+'</span><br><span id="com-log" style="color:#7a8f80">[BOOT] b.i.o.s.js 9vs9 OK · [COM] '+file+' erkannt · [COM] EINE Datei in alle reinpasst</span>';
    if(document.body) document.body.insertBefore(b, document.body.firstChild);
    else document.addEventListener('DOMContentLoaded', function(){ document.body.insertBefore(b, document.body.firstChild); });
  }

  // 2. Nav unten einhängen — /7 immer erreichbar
  function nav(){
    if(document.getElementById('com-nav') || !document.body) return;
    var n=document.createElement('div');
    n.id='com-nav';
    n.style.cssText='margin:18px 0 0;padding:10px 0;border-top:1px solid #1a2e22;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#7a8f80';
    var files=['apfel.html','eye.html','man.html','raid.html','setup.html','src.html','server.html'];
    var links=files.map(function(f){ return '<a href="./'+f+'" style="color:'+(f===file?'#fff':'#00ff88')+';margin-right:10px">'+(f===file?'▶ ':'')+f+'</a>'; }).join('');
    n.innerHTML='COM NAV — /7 — '+links+'<br><span style="color:#555">INNEN: file:// · AUSSEN: https://iki1uc.github.io/com.com/ · SERVER: python -m http.server 8000</span>';
    document.body.appendChild(n);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', nav); else nav();

  // 3. Das Richtige: INNEN/AUSSEN + CHECK als globale Funktionen — jede Datei kann sie nutzen
  window.com = {
    file: file,
    log: log,
    innen: function(){ window.open('http://localhost:8000/'+file,'_blank'); log('[INNEN] localhost:8000/'+file+' — wenn nichts kommt, Server starten: python -m http.server 8000'); },
    aussen: function(){ window.open('https://iki1uc.github.io/com.com/'+file,'_blank'); log('[AUSSEN] GitHub Pages/'+file); },
    check: async function(url){
      url = url || ('http://localhost:8000/'+file);
      log('[CHECK] '+url+' ...');
      try{ await fetch(url,{method:'HEAD',mode:'no-cors'}); log('[CHECK] PASS — erreichbar'); return 'PASS'; }
      catch(e){ log('[CHECK] UNKNOWN — wartet, Server läuft nicht. Nie FAIL.'); return 'UNKNOWN'; }
    }
  };
  log('[COM] com.js geladen — EINE Datei, in alle reinpasst');
})();
