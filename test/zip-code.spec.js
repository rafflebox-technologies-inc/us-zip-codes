const zipCodes = require('../index.js');
describe('USA postal code', () => {
    describe('AL', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('al', 35004)).toBe(true);
            expect(zipCodes.validate('AL', '35005')).toBe(true);
            expect(zipCodes.validate('al', '35005')).toBe(true);
            expect(zipCodes.validate('AL', '35004')).toBe(true);
            expect(zipCodes.validate('alabama', '35003')).toBe(false);
            expect(zipCodes.validate('AL', '36926')).toBe(false);
        });
    });
    describe('AK', ()=> { 
        it('should validate zip code', () => { 
            expect(zipCodes.validate('alaska', '99504')).toBe(true);
            expect(zipCodes.validate('ak', '99505')).toBe(true);
            expect(zipCodes.validate('AK', '99504')).toBe(true);
            expect(zipCodes.validate('alaska', '99960')).toBe(false);
            expect(zipCodes.validate('AK', '99950')).toBe(true);
            expect(zipCodes.validate('AK', '99951')).toBe(false);
        });
    });
    describe('AZ', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('arizona', '85201')).toBe(true);
            expect(zipCodes.validate('az', '85202')).toBe(true);
            expect(zipCodes.validate('AZ', '85201')).toBe(true);
            expect(zipCodes.validate('arizona', '86557')).toBe(false);
            expect(zipCodes.validate('AZ', '85000')).toBe(false);
        });
    });
    describe('AR', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('arkansas', '72401')).toBe(true);
            expect(zipCodes.validate('ar', '72402')).toBe(true);
            expect(zipCodes.validate('AR', '72401')).toBe(true);
            expect(zipCodes.validate('arkansas', '71400')).toBe(false);
            expect(zipCodes.validate('AR', '73400')).toBe(false);
        });
    });
    describe('CA', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('california', '90002')).toBe(true);
            expect(zipCodes.validate('ca', '90003')).toBe(true);
            expect(zipCodes.validate('CA', '90002')).toBe(true);
            expect(zipCodes.validate('california', '90000')).toBe(false);
            expect(zipCodes.validate('CA', '96240')).toBe(false);
        });
    });
    describe('CO', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('colorado', '80201')).toBe(true);
            expect(zipCodes.validate('co', '80202')).toBe(true);
            expect(zipCodes.validate('CO', '80201')).toBe(true);
            expect(zipCodes.validate('colorado', '82200')).toBe(false);
            expect(zipCodes.validate('CO', '80000')).toBe(false);
        });
    });
    describe('CT', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('connecticut', '6001')).toBe(true);
            expect(zipCodes.validate('ct', '6002')).toBe(true);
            expect(zipCodes.validate('CT', '6001')).toBe(true);
            expect(zipCodes.validate('connecticut', '6000')).toBe(false);
            expect(zipCodes.validate('CT', '6937')).toBe(false);
        });
    });
    describe('DE', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('delaware', '19901')).toBe(true);
            expect(zipCodes.validate('de', '19902')).toBe(true);
            expect(zipCodes.validate('DE', '19901')).toBe(true);
            expect(zipCodes.validate('delaware', '19700')).toBe(false);
            expect(zipCodes.validate('DE', '19990')).toBe(false);
        });
    });
    describe('FL', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('florida', '33001')).toBe(true);
            expect(zipCodes.validate('fl', '33002')).toBe(true);
            expect(zipCodes.validate('FL', '33001')).toBe(true);
            expect(zipCodes.validate('florida', '32000')).toBe(false);
            expect(zipCodes.validate('FL', '35000')).toBe(false);
        });
    });
    describe('GA', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('ga', '33001')).toBe(true);
            expect(zipCodes.validate('ga', '30302')).toBe(true);
            expect(zipCodes.validate('GA', '30301')).toBe(true);
            expect(zipCodes.validate('georgia', '30000')).toBe(false);
            expect(zipCodes.validate('GA', '40000')).toBe(false);
        });
    });
    describe('HI', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('hawaii', '96800')).toBe(true);
            expect(zipCodes.validate('hi', '96702')).toBe(true);
            expect(zipCodes.validate('HI', '96701')).toBe(true);
            expect(zipCodes.validate('hawaii', '96000')).toBe(false);
            expect(zipCodes.validate('HI', '97700')).toBe(false);
        });
    });
    describe('ID', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('idaho', '83401')).toBe(true);
            expect(zipCodes.validate('id', '83402')).toBe(true);
            expect(zipCodes.validate('ID', '83401')).toBe(true);
            expect(zipCodes.validate('idaho', '83000')).toBe(false);
            expect(zipCodes.validate('ID', '84000')).toBe(false);
        });
    });
    describe('IL', () => {
        it('should validate zip code', () =>{
            expect(zipCodes.validate('illinois', '62401')).toBe(true); 
            expect(zipCodes.validate('il', '62402')).toBe(true);
            expect(zipCodes.validate('IL', '62401')).toBe(true);
            expect(zipCodes.validate('illinois', '60000')).toBe(false);
            expect(zipCodes.validate('IL', '63000')).toBe(false);
        });
    });
    describe('IN', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('indiana', '46201')).toBe(true);
            expect(zipCodes.validate('ind', '46202')).toBe(true);
            expect(zipCodes.validate('IND', '46201')).toBe(true);
            expect(zipCodes.validate('indiana', '46000')).toBe(false);
            expect(zipCodes.validate('IND', '48000')).toBe(false);
        });
    });
    describe('IA', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('iowa', '50101')).toBe(true);
            expect(zipCodes.validate('ia', '50102')).toBe(true);
            expect(zipCodes.validate('IA', '50101')).toBe(true);
            expect(zipCodes.validate('iowa', '50000')).toBe(false);
            expect(zipCodes.validate('IA', '52900')).toBe(false);
        });
    });
    describe('KS', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('kansas', '66201')).toBe(true);
            expect(zipCodes.validate('ks', '66202')).toBe(true);
            expect(zipCodes.validate('KS', '66201')).toBe(true);
            expect(zipCodes.validate('kansas', '66000')).toBe(false);
            expect(zipCodes.validate('KS', '68900')).toBe(false);
        });
    });
    describe('KY', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('kentucky', '40201')).toBe(true);
            expect(zipCodes.validate('ky', '40202')).toBe(true);
            expect(zipCodes.validate('KY', '40201')).toBe(true);
            expect(zipCodes.validate('kentucky', '40000')).toBe(false);
            expect(zipCodes.validate('KY', '43100')).toBe(false);
        });
    });
    describe('LA', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('louisiana', '70101')).toBe(true);
            expect(zipCodes.validate('la', '70102')).toBe(true);
            expect(zipCodes.validate('LA', '70101')).toBe(true);
            expect(zipCodes.validate('louisiana', '70000')).toBe(false);
            expect(zipCodes.validate('LA', '72100')).toBe(false);
        });
    });
    describe('ME', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('maine', '4001')).toBe(true);
            expect(zipCodes.validate('me', '4002')).toBe(true);
            expect(zipCodes.validate('ME', '4001')).toBe(true);
            expect(zipCodes.validate('maine', '1000')).toBe(false);
            expect(zipCodes.validate('ME', '6000')).toBe(false);
        });
    });
    describe('MD', () => {
        it('should validate zip code', () => {
            expect(zipCodes.validate('maryland', '21201')).toBe(true);
            expect(zipCodes.validate('md', '21202')).toBe(true);
            expect(zipCodes.validate('MD', '21201')).toBe(true);
            expect(zipCodes.validate('maryland', '20000')).toBe(false);
            expect(zipCodes.validate('MD', '22000')).toBe(false);
        });
    });
    describe('MA', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('massachusetts', '1001')).toBe(true);
            expect(zipCodes.validate('ma', '1002')).toBe(true);
            expect(zipCodes.validate('MA', '1001')).toBe(true);
            expect(zipCodes.validate('massachusetts', '900')).toBe(false);
            expect(zipCodes.validate('MA', '7000')).toBe(false);
        });
    });
    describe('MI', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('michigan', '48201')).toBe(true);
            expect(zipCodes.validate('mi', '48202')).toBe(true);
            expect(zipCodes.validate('MI', '48201')).toBe(true);
            expect(zipCodes.validate('michigan', '48000')).toBe(false);
            expect(zipCodes.validate('MI', '59000')).toBe(false);
        });
    });
    describe('MN', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('minnesota', '55001')).toBe(true);
            expect(zipCodes.validate('mn', '55002')).toBe(true);
            expect(zipCodes.validate('MN', '55001')).toBe(true);
            expect(zipCodes.validate('minnesota', '50000')).toBe(false);
            expect(zipCodes.validate('MN', '57000')).toBe(false);
        });
    });
    describe('MS', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('mississippi', '38601')).toBe(true);
            expect(zipCodes.validate('ms', '38602')).toBe(true);
            expect(zipCodes.validate('MS', '38601')).toBe(true);
            expect(zipCodes.validate('mississippi', '38000')).toBe(false);
            expect(zipCodes.validate('MS', '42345')).toBe(false);
        });
    });
    describe('MO', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('missouri', '63001')).toBe(true);
            expect(zipCodes.validate('mo', '63002')).toBe(true);
            expect(zipCodes.validate('MO', '63001')).toBe(true);
            expect(zipCodes.validate('missouri', '62000')).toBe(false);
            expect(zipCodes.validate('MO', '66000')).toBe(false);
        });
    });
    describe('MT', ()=> {
        it('should validate zip code', ()=> {
            expect(zipCodes.validate('mt', '59937')).toBe(true);
            expect(zipCodes.validate('MT', '59937')).toBe(true);
            expect(zipCodes.validate('montana', '59001')).toBe(true);
            expect(zipCodes.validate('MT', '65433')).toBe(false);
            expect(zipCodes.validate('montana', '59000')).toBe(false);
        });
    });
    describe('NE', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('nebraska', '68001')).toBe(true);
            expect(zipCodes.validate('ne', '68002')).toBe(true);
            expect(zipCodes.validate('NE', '68001')).toBe(true);
            expect(zipCodes.validate('nebraska', '68000')).toBe(false);
            expect(zipCodes.validate('NE', '70000')).toBe(false);
        });
    });
    describe('NV', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('nevada', '89001')).toBe(true);
            expect(zipCodes.validate('nv', '89002')).toBe(true);
            expect(zipCodes.validate('NV', '89001')).toBe(true);
            expect(zipCodes.validate('nevada', '88000')).toBe(false);
            expect(zipCodes.validate('NV', '90000')).toBe(false);
        });
    });
    describe('NH', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('new hampshire', '3031')).toBe(true);
            expect(zipCodes.validate('nh', '3232')).toBe(true);
            expect(zipCodes.validate('NH', '3431')).toBe(true);
            expect(zipCodes.validate('new hampshire', '3995')).toBe(false);
            expect(zipCodes.validate('NH', '445d')).toBe(false);
        });
    });
    describe('NJ', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('new jersey', '7001')).toBe(true);
            expect(zipCodes.validate('nj', '7002')).toBe(true);
            expect(zipCodes.validate('NJ', '7001')).toBe(true);
            expect(zipCodes.validate('new jersey', '7000')).toBe(false);
            expect(zipCodes.validate('NJ', '9000')).toBe(false);
        });
    });
    describe('NM', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('new mexico', '87001')).toBe(true);
            expect(zipCodes.validate('nm', '87002')).toBe(true);
            expect(zipCodes.validate('NM', '87001')).toBe(true);
            expect(zipCodes.validate('new mexico', '87000')).toBe(false);
            expect(zipCodes.validate('NM', '88563')).toBe(false);
        });
    });
    describe('NY', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('ny', 14656)).toBe(true);
            expect(zipCodes.validate('ny', 501)).toBe(true);
            expect(zipCodes.validate('NY', '1002')).toBe(true);
            expect(zipCodes.validate('new york', '400')).toBe(false);
            expect(zipCodes.validate('NY', '23234')).toBe(false);
        });
    });
    describe('NC', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('nc', 28001)).toBe(true);
            expect(zipCodes.validate('NC', '28002')).toBe(true);
            expect(zipCodes.validate('north carolina', '28001')).toBe(true);
            expect(zipCodes.validate('NC', '28999')).toBe(false);
            expect(zipCodes.validate('north carolina', 26934)).toBe(false);
        });
    });
    describe('ND', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('nd', '58001')).toBe(true);
            expect(zipCodes.validate('ND', '58002')).toBe(true);
            expect(zipCodes.validate('north dakota', '58001')).toBe(true);
            expect(zipCodes.validate('ND', '58999')).toBe(false);
            expect(zipCodes.validate('north dakota', '58000')).toBe(false);
        });
    });
    describe('OH', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('ohio', '45001')).toBe(true);
            expect(zipCodes.validate('oh', '45002')).toBe(true);
            expect(zipCodes.validate('OH', '45001')).toBe(true);
            expect(zipCodes.validate('ohio', 46778)).toBe(false);
            expect(zipCodes.validate('OH', '42577')).toBe(false);
        });
    });
    describe('OK', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('oklahoma', '73001')).toBe(true);
            expect(zipCodes.validate('ok', '73002')).toBe(true);
            expect(zipCodes.validate('OK', '73001')).toBe(true);
            expect(zipCodes.validate('oklahoma', '73000')).toBe(false);
            expect(zipCodes.validate('OK', '75400')).toBe(false);
        });
    });
    describe('OR', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('oregon', '97901')).toBe(true);
            expect(zipCodes.validate('or', '97902')).toBe(true);
            expect(zipCodes.validate('OR', '97901')).toBe(true);
            expect(zipCodes.validate('oregon', '97000')).toBe(false);
            expect(zipCodes.validate('OR', '98000')).toBe(false);
        });
    });
    describe('PA', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('pennsylvania', '19001')).toBe(true);
            expect(zipCodes.validate('pa', '19002')).toBe(true);
            expect(zipCodes.validate('PA', '19001')).toBe(true);
            expect(zipCodes.validate('pennsylvania', '15000')).toBe(false);
            expect(zipCodes.validate('PA', '20000')).toBe(false);
        });
    });
    describe('RI', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('rhode island', '2801')).toBe(true);
            expect(zipCodes.validate('ri', '2802')).toBe(true);
            expect(zipCodes.validate('RI', '2801')).toBe(true);
            expect(zipCodes.validate('rhode island', '2800')).toBe(false);
            expect(zipCodes.validate('RI', '4456')).toBe(false);
        });
    });
    describe('SC', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('south carolina', '29001')).toBe(true);
            expect(zipCodes.validate('sc', '29002')).toBe(true);
            expect(zipCodes.validate('SC', '29001')).toBe(true);
            expect(zipCodes.validate('south carolina', '29000')).toBe(false);
            expect(zipCodes.validate('SC', '29999')).toBe(false);
        });
    });
    describe('SD', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('south dakota', '57001')).toBe(true);
            expect(zipCodes.validate('sd', '57002')).toBe(true);
            expect(zipCodes.validate('SD', '57001')).toBe(true);
            expect(zipCodes.validate('south dakota', '57000')).toBe(false);
            expect(zipCodes.validate('SD', '57999')).toBe(false);
        });
    });
    describe('TN', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('tennessee', '37010')).toBe(true);
            expect(zipCodes.validate('tn', '37555')).toBe(true);
            expect(zipCodes.validate('TN', '37056')).toBe(true);
            expect(zipCodes.validate('tennessee', '37000')).toBe(false);
            expect(zipCodes.validate('TN', '39999')).toBe(false);
        });
    });
    describe('TX', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('texas', '73301')).toBe(true);
            expect(zipCodes.validate('tx', '73302')).toBe(true);
            expect(zipCodes.validate('TX', '73301')).toBe(true);
            expect(zipCodes.validate('texas', '73000')).toBe(false);
            expect(zipCodes.validate('TX', '89999')).toBe(false);
        });
    });
    describe('UT', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('utah', '84001')).toBe(true);
            expect(zipCodes.validate('ut', '84002')).toBe(true);
            expect(zipCodes.validate('UT', '84001')).toBe(true);
            expect(zipCodes.validate('utah', '84000')).toBe(false);
            expect(zipCodes.validate('UT', '89999')).toBe(false);
        });
    });
    describe('VA', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('virginia', '20101')).toBe(true);
            expect(zipCodes.validate('va', '22002')).toBe(true);
            expect(zipCodes.validate('VA', '22001')).toBe(true);
            expect(zipCodes.validate('virginia', '20000')).toBe(false);
            expect(zipCodes.validate('VA', '25984')).toBe(false);
        });
    });
    describe('VT', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('vermont', '5701')).toBe(true);
            expect(zipCodes.validate('vt', '5702')).toBe(true);
            expect(zipCodes.validate('VT', '5003')).toBe(true);
            expect(zipCodes.validate('vermont', '5000')).toBe(false);
            expect(zipCodes.validate('VT', '5999')).toBe(false);
        });
    });
    describe('WA', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('washington', '98001')).toBe(true);
            expect(zipCodes.validate('wa', '98002')).toBe(true);
            expect(zipCodes.validate('WA', '98001')).toBe(true);
            expect(zipCodes.validate('washington', '98000')).toBe(false);
            expect(zipCodes.validate('WA', '99999')).toBe(false);
        });
    });
    describe('WV', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('west virginia', '25001')).toBe(true);
            expect(zipCodes.validate('wv', '25002')).toBe(true);
            expect(zipCodes.validate('WV', '25001')).toBe(true);
            expect(zipCodes.validate('west virginia', '24000')).toBe(false);
            expect(zipCodes.validate('WV', '27889')).toBe(false);
        });
    });
    describe('WI', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('wisconsin', '53001')).toBe(true);
            expect(zipCodes.validate('wi', '53002')).toBe(true);
            expect(zipCodes.validate('WI', '53001')).toBe(true);
            expect(zipCodes.validate('wisconsin', '53000')).toBe(false);
            expect(zipCodes.validate('WI', '59999')).toBe(false);
        });
    });
    describe('WY', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('wyoming', '82201')).toBe(true);
            expect(zipCodes.validate('wy', '82202')).toBe(true);
            expect(zipCodes.validate('WY', '82201')).toBe(true);
            expect(zipCodes.validate('wyoming', '82000')).toBe(false);
            expect(zipCodes.validate('WY', '89999')).toBe(false);
        });
    });
    describe('ZIP+4', ()=> {
        it('should validate zip code', () => {
            expect(zipCodes.validate('PA', '16735-1309')).toBe(true);
        });
    });
});