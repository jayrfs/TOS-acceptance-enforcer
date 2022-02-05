// var outputText = document.getElementById('displayText');
const displayText = document.getElementById('displayText');
const inputBox2 = document.getElementById('inputBox')
const inputBox = document.getElementById('inputBox')
  .addEventListener("input", (event) => textchanged());

// TODO redo chkstr with new markdown based str including spaces
// (currently using html based chkstr)

onload = dostuff => inputBox2.value=""

var converter = new showdown.Converter();
var str = `# Terms of service

## 1\. Terms

By accessing this Website, accessible from var.websiteurl, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.

## 2\. Use License

Permission is granted to temporarily download one copy of the materials on var.companyname's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

*   modify or copy the materials;
*   use the materials for any commercial purpose or for any public display;
*   attempt to reverse engineer any software contained on var.companyname's Website;
*   remove any copyright or other proprietary notations from the materials; or
*   transferring the materials to another person or "mirror" the materials on any other server.

This will let var.companyname to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.

## 3\. Disclaimer

All the materials on var.companyname’s Website are provided "as is". var.companyname makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, var.companyname does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.

## 4\. Limitations

var.companyname or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on var.companyname’s Website, even if var.companyname or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.

## 5\. Revisions and Errata

The materials appearing on var.companyname’s Website may include technical, typographical, or photographic errors. var.companyname will not promise that any of the materials in this Website are accurate, complete, or current. var.companyname may change the materials contained on its Website at any time without notice. var.companyname does not make any commitment to update the materials.

## 6\. Links

var.companyname has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by var.companyname of the site. The use of any linked website is at the user’s own risk.

## 7\. Site Terms of Use Modifications

var.companyname may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.

## 8\. Your Privacy

Please read our Privacy Policy.

## 9\. Governing Law

Any claim related to var.companyname's Website shall be governed by the laws of in without regards to its conflict of law provisions.
`;

var html = converter.makeHtml(str);
var chkstrbak = "Termsofservice1.TermsByaccessingthisWebsite,accessiblefromvar.websiteurl,youareagreeingtobeboundbytheseWebsiteTermsandConditionsofUseandagreethatyouareresponsiblefortheagreementwithanyapplicablelocallaws.Ifyoudisagreewithanyoftheseterms,youareprohibitedfromaccessingthissite.ThematerialscontainedinthisWebsiteareprotectedbycopyrightandtrademarklaw.2.UseLicensePermissionisgrantedtotemporarilydownloadonecopyofthematerialsonvar.companyname\'sWebsiteforpersonal,non-commercialtransitoryviewingonly.Thisisthegrantofalicense,notatransferoftitle,andunderthislicenseyoumaynot:modifyorcopythematerials;usethematerialsforanycommercialpurposeorforanypublicdisplay;attempttoreverseengineeranysoftwarecontainedonvar.companyname\'sWebsite;removeanycopyrightorotherproprietarynotationsfromthematerials;ortransferringthematerialstoanotherpersonor\"mirror\"thematerialsonanyotherserver.Thiswillletvar.companynametoterminateuponviolationsofanyoftheserestrictions.Upontermination,yourviewingrightwillalsobeterminatedandyoushoulddestroyanydownloadedmaterialsinyourpossessionwhetheritisprintedorelectronicformat.3.DisclaimerAllthematerialsonvar.companyname’sWebsiteareprovided\"asis\".var.companynamemakesnowarranties,mayitbeexpressedorimplied,thereforenegatesallotherwarranties.Furthermore,var.companynamedoesnotmakeanyrepresentationsconcerningtheaccuracyorreliabilityoftheuseofthematerialsonitsWebsiteorotherwiserelatingtosuchmaterialsoranysiteslinkedtothisWebsite.4.Limitationsvar.companynameoritssupplierswillnotbeholdaccountableforanydamagesthatwillarisewiththeuseorinabilitytousethematerialsonvar.companyname’sWebsite,evenifvar.companynameoranauthorizerepresentativeofthisWebsitehasbeennotified,orallyorwritten,ofthepossibilityofsuchdamage.Somejurisdictiondoesnotallowlimitationsonimpliedwarrantiesorlimitationsofliabilityforincidentaldamages,theselimitationsmaynotapplytoyou.5.RevisionsandErrataThematerialsappearingonvar.companyname’sWebsitemayincludetechnical,typographical,orphotographicerrors.var.companynamewillnotpromisethatanyofthematerialsinthisWebsiteareaccurate,complete,orcurrent.var.companynamemaychangethematerialscontainedonitsWebsiteatanytimewithoutnotice.var.companynamedoesnotmakeanycommitmenttoupdatethematerials.6.Linksvar.companynamehasnotreviewedallofthesiteslinkedtoitsWebsiteandisnotresponsibleforthecontentsofanysuchlinkedsite.Thepresenceofanylinkdoesnotimplyendorsementbyvar.companynameofthesite.Theuseofanylinkedwebsiteisattheuser’sownrisk.7.SiteTermsofUseModificationsvar.companynamemayrevisetheseTermsofUseforitsWebsiteatanytimewithoutpriornotice.ByusingthisWebsite,youareagreeingtobeboundbythecurrentversionoftheseTermsandConditionsofUse.8.YourPrivacyPleasereadourPrivacyPolicy.9.GoverningLawAnyclaimrelatedtovar.companyname\'sWebsiteshallbegovernedbythelawsofinwithoutregardstoitsconflictoflawprovisions"
var chkstrnum = 1
var chkstr = str.replace(/# |## |\\|\*   /gm,"");
// console.log(chkstr)
displayText.innerHTML = html;

function textchanged() {
  var html = converter.makeHtml(str.slice(chkstrnum));
  chkstrnum = inputBox2.value.length
  console.log("ib: " + inputBox2.value.charAt(inputBox2.value.length - 1))
  console.log("dp: " + chkstr.charAt(0))
  console.log("no: " + chkstrnum)
  if (inputBox2.value.charAt(inputBox2.value.length - 1) === chkstr.charAt(0)) {
  // if (2>1) {
    // chkstrnum = chkstrnum + 1;
    chkstr = chkstr.substring(1);
    displayText.innerHTML = chkstr;
    // displayText.innerHTML = html
  }
  console.log(chkstrnum)
  // displayText.innerHTML = inputBox2.value;
  // displayText.innerHTML = str.slice(chkstrnum);
}

// displayText.innerHTML = html;