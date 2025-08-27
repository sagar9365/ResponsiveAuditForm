$(document).ready(function() {
  $("#dhName").select2({ placeholder: "Search DH Name", width:'100%' });
});

// Dark mode
function toggleDark(){ document.body.classList.toggle("dark"); }

// Calculation
function calcDiff(){
  let lpn= +document.getElementById("lpnQty").value||0;
  let phy= +document.getElementById("phyQty").value||0;
  let diff = Math.abs(lpn - phy);
  document.getElementById("diffQty").value = diff;
  let remark = "Equal";
  if(lpn>phy) remark="Short";
  else if(lpn<phy) remark="Excess";
  document.getElementById("remarks").value = remark;
  calcValue();
}
function calcValue(){
  let diff = +document.getElementById("diffQty").value||0;
  let price = +document.getElementById("price").value||0;
  document.getElementById("totalValue").value = diff*price;
}
document.getElementById("lpnQty").addEventListener("input",calcDiff);
document.getElementById("phyQty").addEventListener("input",calcDiff);
document.getElementById("price").addEventListener("input",calcValue);

// Scanner
let html5QrcodeScanner;
let currentField;

function openScanner(fieldId){
    currentField = fieldId;

    if(html5QrcodeScanner){
        html5QrcodeScanner.clear().catch(()=>{});
    }

    document.getElementById("scannerModal").style.display="flex";

    html5QrcodeScanner = new Html5Qrcode("reader");
    html5QrcodeScanner.start(
        { facingMode: "environment" },
        { fps: 20, qrbox: { width: 250, height: 250 }, aspectRatio:1.0, disableFlip:false },
        (decodedText)=>{
            document.getElementById(currentField).value = decodedText;
            closeScanner();
        },
        (err)=>{}
    ).catch(err=>{
        alert("Camera error: "+err);
        closeScanner();
    });
}

function closeScanner(){
    if(html5QrcodeScanner){
        html5QrcodeScanner.stop().then(()=>html5QrcodeScanner.clear());
        html5QrcodeScanner = null;
    }
    document.getElementById("scannerModal").style.display="none";
}

// Click outside scanner to close
document.getElementById("scannerModal").addEventListener("click", function(e){
  if(e.target === this){ closeScanner(); }
});






// // ======== CONFIG ========
// const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6aUhQKkZbzWegwTyFRQEZ6FWyH9lPrLIf7IN4e2dK07Z42XZWP0e_D4AFhazdHkk/exec"; 

// // ======== Dark Mode ========
// function toggleDark(){
//   document.body.classList.toggle("dark");
// }

// // ======== Calculation ========
// function calcDiff(){
//   let lpn = +document.getElementById("lpnQty").value || 0;
//   let phy = +document.getElementById("phyQty").value || 0;
//   let diff = Math.abs(lpn - phy);
//   document.getElementById("diffQty").value = diff;

//   let remark = "Equal";
//   if(lpn > phy) remark = "Short";
//   else if(lpn < phy) remark = "Excess";
//   document.getElementById("remarks").value = remark;

//   calcValue();
// }

// function calcValue(){
//   let diff = +document.getElementById("diffQty").value || 0;
//   let price = +document.getElementById("price").value || 0;
//   document.getElementById("totalValue").value = diff * price;
// }

// document.getElementById("lpnQty").addEventListener("input", calcDiff);
// document.getElementById("phyQty").addEventListener("input", calcDiff);
// document.getElementById("price").addEventListener("input", calcValue);

// // ======== QR + Barcode Scanner ========
// let html5QrcodeScanner;
// let currentField;

// function openScanner(fieldId){
//   currentField = fieldId;

//   if(html5QrcodeScanner){
//     html5QrcodeScanner.clear().catch(()=>{});
//   }

//   document.getElementById("scannerModal").style.display="flex";

//   html5QrcodeScanner = new Html5Qrcode("reader");
//   const config = { 
//     fps: 20, 
//     qrbox: { width: 250, height: 250 }, 
//     aspectRatio: 1.0, 
//     disableFlip: false,
//     formatsToSupport: [
//       Html5QrcodeSupportedFormats.QR_CODE,
//       Html5QrcodeSupportedFormats.CODE_128,
//       Html5QrcodeSupportedFormats.CODE_39,
//       Html5QrcodeSupportedFormats.EAN_13,
//       Html5QrcodeSupportedFormats.EAN_8,
//       Html5QrcodeSupportedFormats.DATA_MATRIX,
//       Html5QrcodeSupportedFormats.PDF_417,
//       Html5QrcodeSupportedFormats.AZTEC
//     ]
//   };

//   html5QrcodeScanner.start(
//     { facingMode: "environment" },
//     config,
//     (decodedText)=>{
//       document.getElementById(currentField).value = decodedText;
//       closeScanner();
//     },
//     (err)=>{}
//   ).catch(err=>{
//     alert("Camera error: " + err);
//     closeScanner();
//   });
// }

// function closeScanner(){
//   if(html5QrcodeScanner){
//     html5QrcodeScanner.stop().then(()=>html5QrcodeScanner.clear());
//     html5QrcodeScanner = null;
//   }
//   document.getElementById("scannerModal").style.display="none";
// }

// // ======== Click Outside Scanner to Close ========
// document.getElementById("scannerModal").addEventListener("click", function(e){
//   if(e.target === this){ closeScanner(); }
// });

