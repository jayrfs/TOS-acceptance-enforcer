const correct = document.getElementById('correct');
const displayText = document.getElementById('displayText');
const inputBox2 = document.getElementById('inputBox')
const inputBox = document.getElementById('inputBox')
  .addEventListener("input", (event) => textchanged());

onload = dostuff => inputBox2.value=""

var sfx_type = new Audio("res/type.ogg");
var sfx_alert = new Audio("res/cry.ogg");
var sfx_victory = new Audio("res/yay.ogg");
var converter = new showdown.Converter();
var str = `# Terms of service

## 1\. Terms

By accessing this Website, accessible from jayrfs.github.io, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.

## 2\. Use License

Permission is granted to temporarily download one copy of the materials on ACME Corporation's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

*   modify or copy the materials;
*   use the materials for any commercial purpose or for any public display;
*   attempt to reverse engineer any software contained on ACME Corporation's Website;
*   remove any copyright or other proprietary notations from the materials; or
*   transferring the materials to another person or "mirror" the materials on any other server.

This will let ACME Corporation to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.

## 3\. Disclaimer

All the materials on ACME Corporation’s Website are provided "as is". ACME Corporation makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, ACME Corporation does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website. If you agree to this TOS, we will reward you with a youtube video.

## 4\. Limitations

ACME Corporation or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on ACME Corporation’s Website, even if ACME Corporation or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.

## 5\. Revisions and Errata

The materials appearing on ACME Corporation’s Website may include technical, typographical, or photographic errors. ACME Corporation will not promise that any of the materials in this Website are accurate, complete, or current. ACME Corporation may change the materials contained on its Website at any time without notice. ACME Corporation does not make any commitment to update the materials. Wanna hear a joke? What did one traffic light say to the other? "Stop looking!, I'm changing!"

## 6\. Links

ACME Corporation has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by ACME Corporation of the site. The use of any linked website is at the user’s own risk.

## 7\. Site Terms of Use Modifications

ACME Corporation may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.

## 8\. Your Privacy

Please read our Privacy Policy.

## 9\. Governing Law

Any claim related to ACME Corporation's Website shall be governed by the laws of in without regards to its conflict of law provisions.
`;

var html = converter.makeHtml(str);
var chkstrnum = 1
var chkstr = str.replace(/# |## |\\/gm,"");
displayText.innerHTML = html;

function textchanged() {
  chkstrnum = inputBox2.value.length
  if (inputBox2.value.charAt(inputBox2.value.length - 1) === chkstr.charAt(0)) {
    correct.innerHTML = correct.innerHTML + chkstr.charAt(0);
    chkstr = chkstr.substring(1);
    displayText.innerHTML = chkstr;
    sfx_type.play()
  } else {
    sfx_alert.play()
    alert(` Please read the TOS carefully!
  
  hint: The terms are case sensitive`)
  }
  inputBox2.value=""
  if (chkstr == ""){
    sfx_victory.play()
    alert("Congratulations, you have now agreed to our TOS! :)")
    window.location.href = "https://youtu.be/pPd67CEL54E";
  }
}