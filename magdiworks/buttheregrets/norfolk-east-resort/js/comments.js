cmtlist = $('#cmtlist').text();

function setObject(key, value) {
    window.localStorage.setItem(key,
        JSON.stringify(value));
}

function getObject(key) {
    var storage = window.localStorage;
    var value = storage.getItem(key);
    return value && JSON.parse(value);
}

function clearStorage() {
    window.localStorage.clear();
}

function fetchComments(){
    var inlist=getObject('totCmts');
    if(inlist === null){
        inlist='';
    }

    $('#cmtlist').empty();
    $('#cmtlist').append(inlist);
    setObject('totCmts', cmtlist);
}

function clearComment() {
    $('#txt1').val('');
    if ($('#txt1').val() === 'CLEAR ALL STORAGE NOW!'){
        clearStorage();
    }
}

function saveComment() {
    var ctext = $('#txt1').val();
    var cname = $('#namebox').val();
    var idname = $('#id-number').val();
    var cmtDate = new Date();
    var prevComments = $('#cmtlist').html();

    if (cname === '') {
        cname = 'Anonymous';
    }

    var curComment = '<p><span class="comment-name">' + cname + ' | ' + idname + ' | ' + '</span>' + cmtDate + '<br><br>'
        + ctext + '</p>';
    $('#cmtlist').empty();
    $('#cmtlist').append(curComment + prevComments)

}


