// $(document).ready(function() {
//   $("#dhName").select2({ placeholder: "Search DH Name", width:'100%' });
// });

// // Dark mode
// function toggleDark(){ document.body.classList.toggle("dark"); }

// // Calculation
// function calcDiff(){
//   let lpn= +document.getElementById("lpnQty").value||0;
//   let phy= +document.getElementById("phyQty").value||0;
//   let diff = Math.abs(lpn - phy);
//   document.getElementById("diffQty").value = diff;
//   let remark = "Equal";
//   if(lpn>phy) remark="Short";
//   else if(lpn<phy) remark="Excess";
//   document.getElementById("remarks").value = remark;
//   calcValue();
// }
// function calcValue(){
//   let diff = +document.getElementById("diffQty").value||0;
//   let price = +document.getElementById("price").value||0;
//   document.getElementById("totalValue").value = diff*price;
// }
// document.getElementById("lpnQty").addEventListener("input",calcDiff);
// document.getElementById("phyQty").addEventListener("input",calcDiff);
// document.getElementById("price").addEventListener("input",calcValue);

// // Scanner
// let html5QrcodeScanner;
// let currentField;

// function openScanner(fieldId){
//     currentField = fieldId;

//     if(html5QrcodeScanner){
//         html5QrcodeScanner.clear().catch(()=>{});
//     }

//     document.getElementById("scannerModal").style.display="flex";

//     html5QrcodeScanner = new Html5Qrcode("reader");
//     html5QrcodeScanner.start(
//         { facingMode: "environment" },
//         { fps: 20, qrbox: { width: 250, height: 250 }, aspectRatio:1.0, disableFlip:false },
//         (decodedText)=>{
//             document.getElementById(currentField).value = decodedText;
//             closeScanner();
//         },
//         (err)=>{}
//     ).catch(err=>{
//         alert("Camera error: "+err);
//         closeScanner();
//     });
// }

// function closeScanner(){
//     if(html5QrcodeScanner){
//         html5QrcodeScanner.stop().then(()=>html5QrcodeScanner.clear());
//         html5QrcodeScanner = null;
//     }
//     document.getElementById("scannerModal").style.display="none";
// }

// // Click outside scanner to close
// document.getElementById("scannerModal").addEventListener("click", function(e){
//   if(e.target === this){ closeScanner(); }
// });






// // // ======== CONFIG ========
// // const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6aUhQKkZbzWegwTyFRQEZ6FWyH9lPrLIf7IN4e2dK07Z42XZWP0e_D4AFhazdHkk/exec"; 

// // // ======== Dark Mode ========
// // function toggleDark(){
// //   document.body.classList.toggle("dark");
// // }

// // // ======== Calculation ========
// // function calcDiff(){
// //   let lpn = +document.getElementById("lpnQty").value || 0;
// //   let phy = +document.getElementById("phyQty").value || 0;
// //   let diff = Math.abs(lpn - phy);
// //   document.getElementById("diffQty").value = diff;

// //   let remark = "Equal";
// //   if(lpn > phy) remark = "Short";
// //   else if(lpn < phy) remark = "Excess";
// //   document.getElementById("remarks").value = remark;

// //   calcValue();
// // }

// // function calcValue(){
// //   let diff = +document.getElementById("diffQty").value || 0;
// //   let price = +document.getElementById("price").value || 0;
// //   document.getElementById("totalValue").value = diff * price;
// // }

// // document.getElementById("lpnQty").addEventListener("input", calcDiff);
// // document.getElementById("phyQty").addEventListener("input", calcDiff);
// // document.getElementById("price").addEventListener("input", calcValue);

// // // ======== QR + Barcode Scanner ========
// // let html5QrcodeScanner;
// // let currentField;

// // function openScanner(fieldId){
// //   currentField = fieldId;

// //   if(html5QrcodeScanner){
// //     html5QrcodeScanner.clear().catch(()=>{});
// //   }

// //   document.getElementById("scannerModal").style.display="flex";

// //   html5QrcodeScanner = new Html5Qrcode("reader");
// //   const config = { 
// //     fps: 20, 
// //     qrbox: { width: 250, height: 250 }, 
// //     aspectRatio: 1.0, 
// //     disableFlip: false,
// //     formatsToSupport: [
// //       Html5QrcodeSupportedFormats.QR_CODE,
// //       Html5QrcodeSupportedFormats.CODE_128,
// //       Html5QrcodeSupportedFormats.CODE_39,
// //       Html5QrcodeSupportedFormats.EAN_13,
// //       Html5QrcodeSupportedFormats.EAN_8,
// //       Html5QrcodeSupportedFormats.DATA_MATRIX,
// //       Html5QrcodeSupportedFormats.PDF_417,
// //       Html5QrcodeSupportedFormats.AZTEC
// //     ]
// //   };

// //   html5QrcodeScanner.start(
// //     { facingMode: "environment" },
// //     config,
// //     (decodedText)=>{
// //       document.getElementById(currentField).value = decodedText;
// //       closeScanner();
// //     },
// //     (err)=>{}
// //   ).catch(err=>{
// //     alert("Camera error: " + err);
// //     closeScanner();
// //   });
// // }

// // function closeScanner(){
// //   if(html5QrcodeScanner){
// //     html5QrcodeScanner.stop().then(()=>html5QrcodeScanner.clear());
// //     html5QrcodeScanner = null;
// //   }
// //   document.getElementById("scannerModal").style.display="none";
// // }

// // // ======== Click Outside Scanner to Close ========
// // document.getElementById("scannerModal").addEventListener("click", function(e){
// //   if(e.target === this){ closeScanner(); }
// // });


// ========== DH Names ==========
const dhNames = [
  "BLR-BTM-2", "BLR-BTM LAYOUT NEW", "BLR-RICHMOND TOWN", "BLR-JP Nagar",
  "BLR-BANASHANKARI", "BLR-Mathikere", "BLR-Kalyan Nagar Network", "BLR-Chickpet New",
  "BLR-SHIVAJI NAGAR", "BLR-Cholayakanakalli", "BLR-Jakkur New", "BLR-Jakkur Network",
  "BLR-HEBBAL NEW", "BLR-Nikoo Home New", "BLR-TC Palaya", "BLR-Devanahalli",
  "BLR-Yelahanka Network", "BLR-Nehru Nagar", "BLR-GUNJUR", "BLR-HSR-3",
  "BLR-Narayana reddy Layout", "BLR-Kannika Nagar", "BLR-GUNJUR Network",
  "BLR-Mico layout network-2", "BLR-Bannerghatta Network 2", "BLR-BANNERGHATTA",
  "BLR-Kambhipura", "BLR-JP NAGAR New", "BLR-KALYAN NAGAR NEW", "BLR-Challakere",
  "BLR-Koramangala Network", "BLR-Hennur New", "BLR-Dasarahalli",
  "BLR-SHIVAJI NAGAR Network", "BLR-Margosa road", "BLR-Banjara Layout",
  "BLR-Ramamurthy Nagar Network", "BLR-BASAVANAPURA NETWORK 2", "BLR-Bagalur",
  "BLR-RWF Yelahanka", "BLR-Nikoo Home New", "BLR-TC Palaya", "BLR-Devanahalli",
  "Sanjaynagar", "BLR-BHADRAPPA LAYOUT NETWORK", "BLR-Bhadrapppa Layout",
  "BLR-HBR Layout", "BLR-Dooravani Nagar", "BLR-Nagavara", "BLR-Narayanapura",
  "BLR-YELAHANKA", "BLR-Kasturinagar", "BLR-Vidyaranyapura", "BLR-Kogilu Road",
  "BLR-Narayanapura Network", "BLR-INDIRANAGAR NEW", "BLR-Malleshwaram new",
  "BLR-RAMAMURTHY NAGAR NEW"
];

// ========== Populate DH Name select ==========
$(document).ready(function() {
  const dhSelect = $("#dhName");
  dhNames.forEach(name=>{
    dhSelect.append(new Option(name, name));
  });
  
  // Initialize Select2
  dhSelect.select2({ placeholder: "Search DH Name", width:'100%' });
});

// ========== Dark mode toggle ==========
function toggleDark(){
  document.body.classList.toggle("dark");
}

// ========== Calculations ==========
function calcDiff(){
  let lpn= +document.getElementById("lpnQty").value||0;
  let phy= +document.getElementById("phyQty").value||0;
  let diff = Math.abs(lpn - phy); // positive number
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
  document.getElementById("totalValue").value = diff * price;
}

// Event listeners
document.getElementById("lpnQty").addEventListener("input",calcDiff);
document.getElementById("phyQty").addEventListener("input",calcDiff);
document.getElementById("price").addEventListener("input",calcValue);

// ========== Scanner Logic ==========
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
        { fps: 20, qrbox: { width:250, height:250 }, aspectRatio:1.0, disableFlip:false },
        (decodedText)=>{
            document.getElementById(currentField).value = decodedText;
            closeScanner();
        },
        (err)=>{}
    ).catch(err=>{
        alert("Camera error: " + err);
        closeScanner();
    });
}

function closeScanner(){
    if(html5QrcodeScanner){
        html5QrcodeScanner.stop().then(()=>{
            html5QrcodeScanner.clear();
            html5QrcodeScanner = null;
        }).catch(()=>{ html5QrcodeScanner = null; });
    }
    document.getElementById("scannerModal").style.display="none";
}

// Click outside scanner to close
document.getElementById("scannerModal").addEventListener("click", function(e){
  if(e.target === this){ closeScanner(); }
});
