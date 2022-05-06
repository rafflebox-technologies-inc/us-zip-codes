const zipCodes = require('../zip-codes.js');

describe('USA postal code', () => {
    describe('AL', ()=>{
        it('should validate zip code', () =>{{
            expect(zipCodes.validate('alabama', '35004')).toBe(true);
            expect(zipCodes.validate('al', '35005')).toBe(true);
            expect(zipCodes.validate('AL', '35004')).toBe(true);
            expect(zipCodes.validate('alabama', '35003')).toBe(false);
            expect(zipCodes.validate('AL', '36926')).toBe(false);
        }});
    });
    describe('AK', ()=>{ 
        it('should validate zip code', () =>{ 
            expect(zipCodes.validate('alaska', '99504')).toBe(true);
            expect(zipCodes.validate('ak', '99505')).toBe(true);
            expect(zipCodes.validate('AK', '99504')).toBe(true);
            expect(zipCodes.validate('alaska', '995000')).toBe(false);
            expect(zipCodes.validate('AK', '99950')).toBe(true);
            expect(zipCodes.validate('AK', '99951')).toBe(false);
        });
    });
    describe('AZ', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('arizona', '85201')).toBe(true);
            expect(zipCodes.validate('az', '85202')).toBe(true);
            expect(zipCodes.validate('AZ', '85201')).toBe(true);
            expect(zipCodes.validate('arizona', '86557')).toBe(false);
            expect(zipCodes.validate('AZ', '85000')).toBe(false);
        });
    });
    describe('AR', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('arkansas', '72401')).toBe(true);
            expect(zipCodes.validate('ar', '72402')).toBe(true);
            expect(zipCodes.validate('AR', '72401')).toBe(true);
            expect(zipCodes.validate('arkansas', '71400')).toBe(false);
            expect(zipCodes.validate('AR', '73400')).toBe(false);
        });
    });
    describe('CA', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('california', '90002')).toBe(true);
            expect(zipCodes.validate('ca', '90003')).toBe(true);
            expect(zipCodes.validate('CA', '90002')).toBe(true);
            expect(zipCodes.validate('california', '90000')).toBe(false);
            expect(zipCodes.validate('CA', '96240')).toBe(false);
        });
    });
    describe('CO', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('colorado', '80201')).toBe(true);
            expect(zipCodes.validate('co', '80202')).toBe(true);
            expect(zipCodes.validate('CO', '80201')).toBe(true);
            expect(zipCodes.validate('colorado', '82200')).toBe(false);
            expect(zipCodes.validate('CO', '80000')).toBe(false);
        });
    });
    describe('CT', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('connecticut', '6001')).toBe(true);
            expect(zipCodes.validate('ct', '6002')).toBe(true);
            expect(zipCodes.validate('CT', '6001')).toBe(true);
            expect(zipCodes.validate('connecticut', '6000')).toBe(false);
            expect(zipCodes.validate('CT', '6937')).toBe(false);
        });
    });
    describe('DE', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('delaware', '19901')).toBe(true);
            expect(zipCodes.validate('de', '19902')).toBe(true);
            expect(zipCodes.validate('DE', '19901')).toBe(true);
            expect(zipCodes.validate('delaware', '19700')).toBe(false);
            expect(zipCodes.validate('DE', '19990')).toBe(false);
        });
    });
    describe('FL', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('florida', '33001')).toBe(true);
            expect(zipCodes.validate('fl', '33002')).toBe(true);
            expect(zipCodes.validate('FL', '33001')).toBe(true);
            expect(zipCodes.validate('florida', '32000')).toBe(false);
            expect(zipCodes.validate('FL', '35000')).toBe(false);
        });
    });
    describe('GA', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('georgia', '30301')).toBe(true);
            expect(zipCodes.validate('ga', '30302')).toBe(true);
            expect(zipCodes.validate('GA', '30301')).toBe(true);
            expect(zipCodes.validate('georgia', '30000')).toBe(false);
            expect(zipCodes.validate('GA', '40000')).toBe(false);
        });
    });
    describe('HI', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('hawaii', '96800')).toBe(true);
            expect(zipCodes.validate('hi', '96702')).toBe(true);
            expect(zipCodes.validate('HI', '96701')).toBe(true);
            expect(zipCodes.validate('hawaii', '96000')).toBe(false);
            expect(zipCodes.validate('HI', '97700')).toBe(false);
        });
    });
    describe('ID', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('idaho', '83401')).toBe(true);
            expect(zipCodes.validate('id', '83402')).toBe(true);
            expect(zipCodes.validate('ID', '83401')).toBe(true);
            expect(zipCodes.validate('idaho', '83000')).toBe(false);
            expect(zipCodes.validate('ID', '84000')).toBe(false);
        });
    });
    describe('IL', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('illinois', '62401')).toBe(true); 
            expect(zipCodes.validate('il', '62402')).toBe(true);
            expect(zipCodes.validate('IL', '62401')).toBe(true);
            expect(zipCodes.validate('illinois', '60000')).toBe(false);
            expect(zipCodes.validate('IL', '63000')).toBe(false);
        });
    });
    describe('IN', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('indiana', '46201')).toBe(true);
            expect(zipCodes.validate('ind', '46202')).toBe(true);
            expect(zipCodes.validate('IND', '46201')).toBe(true);
            expect(zipCodes.validate('indiana', '46000')).toBe(false);
            expect(zipCodes.validate('IND', '48000')).toBe(false);
        });
    });
    describe('IA', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('iowa', '50101')).toBe(true);
            expect(zipCodes.validate('ia', '50102')).toBe(true);
            expect(zipCodes.validate('IA', '50101')).toBe(true);
            expect(zipCodes.validate('iowa', '50000')).toBe(false);
            expect(zipCodes.validate('IA', '52900')).toBe(false);
        });
    });
    describe('KS', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('kansas', '66201')).toBe(true);
            expect(zipCodes.validate('ks', '66202')).toBe(true);
            expect(zipCodes.validate('KS', '66201')).toBe(true);
            expect(zipCodes.validate('kansas', '66000')).toBe(false);
            expect(zipCodes.validate('KS', '68900')).toBe(false);
        });
    });
    describe('KY', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('kentucky', '40201')).toBe(true);
            expect(zipCodes.validate('ky', '40202')).toBe(true);
            expect(zipCodes.validate('KY', '40201')).toBe(true);
            expect(zipCodes.validate('kentucky', '40000')).toBe(false);
            expect(zipCodes.validate('KY', '43100')).toBe(false);
        });
    });
    describe('LA', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('louisiana', '70101')).toBe(true);
            expect(zipCodes.validate('la', '70102')).toBe(true);
            expect(zipCodes.validate('LA', '70101')).toBe(true);
            expect(zipCodes.validate('louisiana', '70000')).toBe(false);
            expect(zipCodes.validate('LA', '72100')).toBe(false);
        });
    });
    describe('ME', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('maine', '4001')).toBe(true);
            expect(zipCodes.validate('me', '4002')).toBe(true);
            expect(zipCodes.validate('ME', '4001')).toBe(true);
            expect(zipCodes.validate('maine', '1000')).toBe(false);
            expect(zipCodes.validate('ME', '6000')).toBe(false);
        });
    });
    describe('MD', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('maryland', '21201')).toBe(true);
            expect(zipCodes.validate('md', '21202')).toBe(true);
            expect(zipCodes.validate('MD', '21201')).toBe(true);
            expect(zipCodes.validate('maryland', '20000')).toBe(false);
            expect(zipCodes.validate('MD', '22000')).toBe(false);
        });
    });
    describe('MA', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('massachusetts', '1001')).toBe(true);
            expect(zipCodes.validate('ma', '1002')).toBe(true);
            expect(zipCodes.validate('MA', '1001')).toBe(true);
            expect(zipCodes.validate('massachusetts', '900')).toBe(false);
            expect(zipCodes.validate('MA', '7000')).toBe(false);
        });
    });
    describe('MI', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('michigan', '48201')).toBe(true);
            expect(zipCodes.validate('mi', '48202')).toBe(true);
            expect(zipCodes.validate('MI', '48201')).toBe(true);
            expect(zipCodes.validate('michigan', '48000')).toBe(false);
            expect(zipCodes.validate('MI', '59000')).toBe(false);
        });
    });
    describe('MN', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('minnesota', '55001')).toBe(true);
            expect(zipCodes.validate('mn', '55002')).toBe(true);
            expect(zipCodes.validate('MN', '55001')).toBe(true);
            expect(zipCodes.validate('minnesota', '50000')).toBe(false);
            expect(zipCodes.validate('MN', '57000')).toBe(false);
        });
    });
    describe('MS', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('mississippi', '38601')).toBe(true);
            expect(zipCodes.validate('ms', '38602')).toBe(true);
            expect(zipCodes.validate('MS', '38601')).toBe(true);
            expect(zipCodes.validate('mississippi', '38000')).toBe(false);
            expect(zipCodes.validate('MS', '42345')).toBe(false);
        });
    });
    describe('MO', ()=>{
        it('should validate zip code', () =>{
            expect(zipCodes.validate('missouri', '63001')).toBe(true);
            expect(zipCodes.validate('mo', '63002')).toBe(true);
            expect(zipCodes.validate('MO', '63001')).toBe(true);
            expect(zipCodes.validate('missouri', '62000')).toBe(false);
            expect(zipCodes.validate('MO', '66000')).toBe(false);
        });
    });
    describe('MT', ()=>{
        it('should validate zip code', ()=>{
            expect(zipCodes.validate('mt', '59937')).toBe(true);
            expect(zipCodes.validate('MT', '59937')).toBe(true);
            expect(zipCodes.validate('montana', '59001')).toBe(true);
            expect(zipCodes.validate('MT', '65433')).toBe(false);
            expect(zipCodes.validate('montana', '59000')).toBe(false);
        });
    });
})