(function() {
    const h1 = document.querySelector("h1").innerText;
    const h2 = document.querySelector("h2").innerText;
    const filename = h1 + " - " + h2;
    var link = document.querySelector("#current_download_file_listner").value;
    if (typeof link === "string") {
      window.location.href = "https://hypeddit-gates-prod.s3.amazonaws.com/" + link + "_main";

      setTimeout(() => {
        const audioSource = document.getElementById('audio-source');
        const url = audioSource.src;
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
        downloadLink.remove();
      }, 1000);
    }
  })();